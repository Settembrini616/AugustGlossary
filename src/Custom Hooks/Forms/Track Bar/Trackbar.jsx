import React from 'react';

const Trackbar = () => {



    return (
        <div className='trackbar'>
            <div className='trackbar-inner'>
                <h3>Track your progress:</h3>
                <div className='daily-calendar'>
                    <div className='progress-circle'>
                    <div className='outer'>
                        <div className="inside">

                        </div>
                     </div>
                    
                    </div>
                   
                    <input type="date" />

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
