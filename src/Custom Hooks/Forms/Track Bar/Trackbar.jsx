import React from 'react';

const Trackbar = () => {



    return (
        <div className='trackbar'>
            <div className='trackbar-inner'>
                <h3>Track your progress with us:</h3>
                <div className='daily-calendar'>
                    <div className='progress-bar'
                data-aria-label=''>
                    
                    </div>
                   
                    <input type="date" />

                </div>
                <div className='submit-lookup'>
                    <button>Submit</button>
                    <button>History</button>

                </div>

            </div>
          
        </div>
    );
}

export default Trackbar;
