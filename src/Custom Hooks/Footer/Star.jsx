import React from 'react';
import { FaStar } from 'react-icons/fa';



const Star = ({selected = false, size, onSelect = f => f},  ) => {

   
    return (
       <FaStar  color={selected ? "rgb(224, 181, 6)" : "grey"} size={size} onClick={onSelect}
        />
    );
}

export default Star;
