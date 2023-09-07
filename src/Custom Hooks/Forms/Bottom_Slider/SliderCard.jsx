import React from "react";

const SliderCard = ({title, ICON, children}) => {

    return (

        <div className='main-card-wrap'>      
            
            <div className='text-block-main'>
               
            <h5>{title}</h5>
            <img src={ICON} alt="icon here" />


            {children}
           
            </div>

            
        </div>
    );
}

export default SliderCard;
