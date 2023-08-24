import React from 'react';

const SliderCard = ({title, ICON, descr}) => {

    return (

        <div className='main-card-wrap'>
            <div className='picture-block-main'>
                <img src={ICON} alt="icon here" />

            </div>
            <div className='text-block-main'>

                <h5>{title}</h5>
                <p>{descr}</p>

            </div>

            
        </div>
    );
}

export default SliderCard;
