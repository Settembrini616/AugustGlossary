import React from 'react';

const SliderCard = ({title, ICON, descr}) => {

    return (

        <div className='main-card-wrap'>      
            
            <div className='text-block-main'>
               
            <h5>{title}</h5>
            <img src={ICON} alt="icon here" />
             
                <p>{descr}</p>

            </div>

            
        </div>
    );
}

export default SliderCard;
