import React, { useReducer, useContext} from 'react';
import AppMainContext from '../../AppMainContext';





const Trackbar = () => {

  const {trackHistoryState, setTrackHistoryState, //modal history

        trackMainSubmitState, setTrackMainSubmitState, //modal submit

        currentDate, setCurrentDate, //date
        
        ACTIONS,

        stateTrackbar, dispatchTrackbar, //reducer trackbar,

        questionModal, setQuestionModal //question Modal
      
      }  = useContext(AppMainContext);


  const handleHistoryOpen = (e) => {
   if(e) e.preventDefault();
   setTrackHistoryState(true); 

  }


  const handleSubmitOpen = (e) => {
    if(e) e.preventDefault();
    setTrackMainSubmitState(true);
  }

  const handleQuestionOpen = (e) => {
    if(e) e.preventDefault();
    setQuestionModal(true);

  }
  
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;


  return (
    <div className='trackbar'>
      <div className='trackbar-inner'>
        <h3>Track your daily progress:</h3>

        <div className='daily-calendar'>

          <div className='plus-minus-question'>
            <button onClick={()=>{dispatchTrackbar({type:ACTIONS.MINUS})}}>–</button>
            <button onClick={()=>{dispatchTrackbar({type:ACTIONS.PLUS})}}>+</button>
            <button onClick={handleQuestionOpen}>?</button>

          </div>
            <label htmlFor='number-input' className='number-input'>

            <input
                type="range"
                min="0"    
                max="100"  
                name="number-input"
                step="1"  
                value={stateTrackbar.inputValue} 
                onChange={(e) =>{ dispatchTrackbar({type:ACTIONS.UPDATE_INPUT, 
                payload:parseInt(e.target.value)})}}/>

            </label>
          <div className='progress-circle'>
            <div
              className='outer'

            >
              <div className='inside' style={{ backgroundColor: "rgb(253, 253, 253)" }}>
                <div id="count-number">{stateTrackbar.inputValue}%</div>
              </div>
              <svg className="svg-1" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                  <linearGradient id="GradientColor" x1="130%" y1="0%" x2="120%" y2="150%">
                  <stop offset="25%" stop-color="#673ab6"/>
                  <stop offset="34%" stop-color="#4d84cd"/> 
                  <stop offset="100%" stop-color="#4d84cd"/> 
                  </linearGradient>
                </defs>
                <circle
                  className='circ' cx="72" cy="70" r="65" stroke-linecap="round"
                  style={{
                    stroke:'url(#GradientColor)',
                    strokeDasharray: 472,
                    strokeDashoffset: 472 - (410 * stateTrackbar.inputValue) / 100,
                    transition: 'stroke-dashoffset 1s linear',
                    transform: 'rotate(90deg)',
                    transformOrigin: 'center'
                  }}
                />
              </svg>
            </div>
          </div>
          <input
            type='date' value={formattedDate}
            onChange={e => setCurrentDate(new Date(e.target.value))}
          />
        </div>
        <div className='submit-lookup'>

          <button className='btn'
                  onClick={handleSubmitOpen}
           >Submit</button>

          <button className='btn'
                  onClick={handleHistoryOpen} >

            History</button>

        </div>
      </div>

    </div>
  );}


export default Trackbar;




