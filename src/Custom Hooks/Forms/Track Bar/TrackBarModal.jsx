import React, { useEffect, useContext, useState } from 'react';
import AppMainContext from '../../AppMainContext';
import { Cross } from '../../../FontAwesome/FontAwesome';
import { useClose } from '../../CustomHooks';




const HistoryListDate = (date) => {

    const dateObject = new Date(date);   
    const months = ['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September',
     'October', 'November', 'December'];

    const monthZeroEleven = dateObject.getMonth();
    const monthTrue = months[monthZeroEleven].substring(0,3);
    const year = dateObject.getFullYear();
    const todayDate = dateObject.getDate();

    return `${monthTrue} ${todayDate}, ${year}`
}


const TrackBarModal = ({UsernameLogin}) => {

 const {trackHistoryState, setTrackHistoryState,
         currentDate } = 
 useContext(AppMainContext);

 const [isClosingHistory, closeTheWindow] = 
 useClose(trackHistoryState, setTrackHistoryState );

 const [serverData, setServerData] = useState([]);

 const [selectedDescription, setSelectedDescription] = useState('');



 useEffect(()=>{
    fetch('/api/reports/')
    .then((response) => response.json())
    .then((data)=> setServerData(data))
    .catch((error)=> console.error('There was an error when trying to fetch data', error))
 }, []);

 const deleteReport = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/reports/${id}`,
        {
            method: 'DELETE',
        }
        );

        if(response.ok){
            setServerData(prev => prev.filter(
                (item) => item.id !== id));

            setSelectedDescription('');
            console.log('A report was deleted');
        }else{
            console.log('Error when deleting a report')
        }

    }catch(error){
        console.error('An error sending delete request occured', error);
    }
 }

    return (

        <div className={trackHistoryState ? 'open-modal' : 'close-modal'}>
         <div className=
         {isClosingHistory ? 'blur-background blurclose' : 'blur-background'}>

         </div>

        <div className={isClosingHistory ? 'main-track-close' : 'main-track-open'}>

            <div className="inner-modal">

                    <div className="top-wrapper">
                    <h4>Your success history</h4>   
                    
                    <Cross
                    className='crossy'
                    onClick={closeTheWindow}
                    />
                    </div>

                    <aside> 
                        <div>
                        <h6>Hello, {UsernameLogin}!</h6>
                            <p>
                                This is your latest study description:
                            </p>
                            <p className='daydescr'>
                                {selectedDescription}
                            </p>
                        </div>
                       
                    </aside>
                    <aside> 
                        <div >
                            <h6>Look it up:</h6>
                            <ul>
                                {serverData.map((item,index)=>(
                                    <li key={item.id}
                                         onClick={()=> setSelectedDescription(item.description)}>
                                         {HistoryListDate(item.date)}: {item.percentage}% 
                                         <Cross className='cross-sm'
                                         onClick={(e)=> {
                                            e.stopPropagation();
                                            deleteReport(item.id);
                                         }}
                                         />
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </aside>

            </div>

        </div>
        </div>
    );
}

export default TrackBarModal;
