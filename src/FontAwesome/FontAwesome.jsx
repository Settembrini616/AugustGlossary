import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Cross = ({className, onClick}) => {
   
    return (
        <>
            <FontAwesomeIcon 
            className={className}
            onClick={onClick}
            icon={faTimes} />
        </>
    );
    };