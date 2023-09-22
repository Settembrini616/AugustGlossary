import React, { useEffect, useContext, useState } from 'react';
import AppMainContext from '../../AppMainContext';




const TrackBarModal = ({dayDescription, children}) => {

 
 const {trackWindowState, setTrackWindowState } = useContext(AppMainContext);

 const [isClosing, setIsClosing] = useState(false);


 const closeTheWindowTrackBar = (e) => {
    if(e) e.preventDefault();

    setIsClosing(true);

    setTimeout(()=>{

        setIsClosing(false);
        setTrackWindowState(false);

    }, 300);
 }

 const closeWithTheKey = (e) => {
    if(e.code === 'Escape') closeTheWindowTrackBar();
 }

useEffect(()=>{
    if(trackWindowState){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    return () => {
        document.body.style.overflow = 'auto'
    }
})

 useEffect(()=>{

    window.addEventListener('keydown', closeWithTheKey);

    return ()=>{
        window.removeEventListener('keydown', closeWithTheKey);
    }

 },[]);


    return (

        <div className={trackWindowState ? 'open-modal' : 'close-modal'}>
         <div className=
         {isClosing ? 'blur-background blurclose' : 'blur-background'}>

         </div>

        <div className={isClosing ? 'main-track-close' : 'main-track-open'}>

            <div className="inner-modal">

                    <div className="top-wrapper">
                    <h4>Your success history</h4>   
                    <span className='cross-close' onClick={closeTheWindowTrackBar}> &times;</span> 
                    </div>

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

        </div>
        </div>
    );
}

export default TrackBarModal;
