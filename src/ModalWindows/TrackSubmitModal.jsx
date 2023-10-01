import React from 'react';
import AppMainContext from '../Custom Hooks/AppMainContext';
import { useContext, useState } from 'react';

import { Cross } from '../FontAwesome/FontAwesome';
import { useClose } from '../Custom Hooks/CustomHooks';


const mainSubmitFormatDate = (date) =>{


    function suffix(day){
        if(day >= 11 && day <= 13){
            return day +'th'
        }

        switch(day % 10){
            case 1:
                return day +'st';
            case 2:
                return day +'nd';
            case 3:
                return day +'rd';
            case 4:
                return day +'th';
            default:
                return day +'th';
        }

    }


    const days = ['Sunday', 'Monday', 'Tuesday',
     'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const months = ['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September',
     'October', 'November', 'December'];

     const dayName = days[date.getDay()];
     const monthName = months[date.getMonth()];
     const day = date.getDate();
     const year = date.getFullYear();

     return `${dayName}, ${monthName} ${suffix(day)} of ${year}`
}



const TrackSubmitModal = () => {


    const { trackMainSubmitState, setTrackMainSubmitState,
            currentDate, setCurrentDate,
            ACTIONS, initialState, 
            stateTrackbar, dispatchTrackbar } = 
            useContext(AppMainContext);

    const [isClosingSubmit, closeTheWindowSubmit] = 
    useClose(trackMainSubmitState, setTrackMainSubmitState);

    const [mainDescription, mainSetDescription] = useState('');


    const sendReportToTheServer = async (date, percentage, description) => {
        
        try {
            const response = await fetch ('/api/reports', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({date, percentage, description}),

            });
            if(response.ok){
                console.log('The report has been saved succesfully');
            }
            else{
                console.error('There was an error on the server side')
            }
        }

        catch(error){
            console.error('The error occured when sending data to the server', error);

        }
    }

    const handleDescription = (e) =>{
        if(e) e.preventDefault();
        mainSetDescription(e.target.value);
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        const date = currentDate;
        const percentage = stateTrackbar.inputValue;
        sendReportToTheServer(date, percentage, mainDescription);
    }

   

    return (

        <div className={trackMainSubmitState 
         ? 'modal-open-submit' :
         'close-modal'}>

            <div className='blur-background-submit'></div>

            <div className={isClosingSubmit
            ? 'submit-inner-close' 
            : 'submit-inner-open' }>
                
        <section className='submit-main-inner-modal'>

            <Cross
            className='crossy'
            onClick={closeTheWindowSubmit}/> 

                <h4>The Daily Report</h4>
 
                <div className='submit-top-part'>

                <form action=""  onSubmit={handleSubmit} >
                <p>Your estimated score for {mainSubmitFormatDate(currentDate)} is:</p>
                <div>{stateTrackbar.inputValue}% out of 100%</div>
                <p>Describe what you did today: </p>
                <textarea 
                className='submit-textarea'
                 name='mainDescription'
                 value={mainDescription}
                 onChange={handleDescription}
                 >
                </textarea>

                <div className="submit-bottom-buttons">
                    <button className='btn' type='submit'>
                        Ok
                    </button>
                    <button className='btn'>
                        Cancel
                    </button>
                </div>


                
                </form>
                </div>
                
                
            
        </section>
          
                
                </div>
        </div>
    );
}

export default TrackSubmitModal;
