import React from 'react';
import { useState, useEffect } from 'react';

const Trackbar = () => {

const [currentDate, setCurrentDate] = useState(new Date());

const [progress, setProgress] = useState(0);
const [startY, setStartY] = useState(0);
const [isDragging, setIsDragging] = useState(false);

useEffect(()=>{

    const handleMouseMove = (e) =>{

        if(isDragging){
            const rect = e.target.getBoundingClientRect();
            const deltaY = e.clientY - rect.top - startY;
            const newProgress = Math.max(0, Math.min(100, progress + deltaY));
            setProgress(newProgress);
            setStartY(e.clientY - rect.top);

        }
      
    };
    const handleMouseUp = () =>{
        setIsDragging(false);
    }
    

    const outerContainer = document.querySelector('.outer');
    outerContainer.addEventListener('mousemove', handleMouseMove);
    outerContainer.addEventListener('mouseup', handleMouseUp);
    outerContainer.addEventListener('mouseleave', handleMouseUp);


    return ()=>{
        outerContainer.removeEventListener('mousemove', handleMouseMove);
        outerContainer.removeEventListener('mouseup', handleMouseUp);
        outerContainer.removeEventListener('mouseleave', handleMouseUp);
 
    }
}, [startY, progress, isDragging]);


const handleMouseDown = (e)=>{
    const rect = e.target.getBoundingClientRect();
    setStartY(e.clientY - rect.top);
    setIsDragging(true);
}


///Making today's date

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
                    <div className='outer'




                    onMouseDown={handleMouseDown}
                    >
                        <div className="inside"
                        style={{
                            backgroundColor: "rgb(253, 253, 253)"
                        }}
                        >
                            <div id="count-number">
                                {progress}%
                            </div>
                        </div>
        <svg className="svg-1"xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#4d84cd" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle 
         className='circ' cx="72" cy="70" r="65" stroke-linecap="round"
         style={{
            strokeDasharray:472,
            strokeDashoffset: 472 - (472 * progress)/100,
            transition: 'stroke-dashoffset 1s linear',
            transform:'rotate(90deg)',
            transformOrigin:'center center'
        
         }} />
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








