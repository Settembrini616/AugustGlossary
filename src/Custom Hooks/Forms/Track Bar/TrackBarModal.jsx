import React from 'react';
import { useClose } from '../../CustomHooks';


const TrackBarModal = ({dayDescription, children}) => {

 const {switchWindow, closeTheWindow} = useClose();



    return (

        <div className={switchWindow}>
        <div className='main-track-window'>

            <h4>Your success history</h4>   
            <span onClick={closeTheWindow}>&times;</span> 

            <div className='track-sections-wrap'>
            <aside> 
                <h6> The most recent result:</h6>
                <p>
                    Hello;
                    {dayDescription}
                </p>
            </aside>
            <aside> 
                <h6>Look it up:</h6>
                <ul>
                    {children}
                </ul>
            </aside>

            </div>
   
            
            <p> </p>

        </div>
        </div>
    );
}

export default TrackBarModal;
