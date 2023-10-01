import React, { useEffect, useContext, useState } from 'react';
import AppMainContext from '../../AppMainContext';
import { Cross } from '../../../FontAwesome/FontAwesome';
import { useClose } from '../../CustomHooks';
import {v4 as uuidv4} from 'uuid'; 



const TrackBarModal = ({UsernameLogin}) => {

 const {trackHistoryState, setTrackHistoryState } = 
 useContext(AppMainContext);

 const [isClosingHistory, closeTheWindow] = 
 useClose(trackHistoryState, setTrackHistoryState );

 const [serverData, setServerData] = useState([]);


 useEffect(()=>{
    fetch('/api/reports/')
    .then((response) => response.json())
    .then((data)=> setServerData(data))
    .catch((error)=> console.error('There was an error when trying to fetch data', error))
 }, []);



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
                                Lorem ipsum dolor 
                            </p>
                        </div>
                       
                    </aside>
                    <aside> 
                        <div >
                            <h6>Look it up:</h6>
                            <ul>
                                {serverData.map((item,index)=>(
                                    <li key={uuidv4()}>
                                        `${item.date}: ${item.percentage}`
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
