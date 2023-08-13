import React from 'react';
import { useState, useEffect } from 'react';

const Trackbar = () => {

const [counter, setCounter] = useState(0);   
const [currentDate, setCurrentDate] = useState(new Date());

useEffect(()=>{
    const intervalId = setInterval(()=>{
        if(counter ==65){
            clearInterval(intervalId)
        }else{
            setCounter((prevCounter)=> prevCounter +1)
        }
    },20);

    return ()=>{
        clearInterval(intervalId)
    };

}, [counter])




const year = currentDate.getFullYear();
const month = String(currentDate.getMonth()+1).padStart(2,'0');
const day = String(currentDate.getDate()).padStart(2,'0');
const formattedDate = `${year}-${month}-${day}`





    return (
        <div className='trackbar'>
            <div className='trackbar-inner'>
                <h3>Track your progress:</h3>
                <div className='daily-calendar'>
                    <div className='progress-circle'>
                    <div className='outer'>
                        <div className="inside">
                            <div id="count-number">
                                {counter}%
                            </div>
                        </div>
        <svg className="svg-1"xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle 
         className='circ' cx="72" cy="70" r="65" stroke-linecap="round" />
         </svg>
                     </div>

                                     
                    </div>
                    <input
                      type='date' value={formattedDate}
                      onChange={e=>setCurrentDate(new Date(e.target.value))}
                      />  
                   
                   
                </div>
                <div className='submit-lookup'>
                    <button className='btn'>Submit</button>
                    <button className='btn'>History</button>

                </div>

            </div>
          
        </div>
    );
}

export default Trackbar;
