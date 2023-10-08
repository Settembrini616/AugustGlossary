import React, {useState, useEffect, useContext} from 'react';
import AppMainContext from '../../Custom Hooks/AppMainContext';

export const theDateFromOctFirst = (dateToday) =>{

    const octFirst = new Date('2023-10-01');

    const difference = Math.floor((dateToday - octFirst)/(1000 * 60 * 60 * 24));

    return difference + 1;
}

 export  default function HeroImage(){


    const {serverDate} = useContext(AppMainContext);

    

    const daysIn = serverDate ? theDateFromOctFirst(serverDate) : '??'; 


    return (

        <section className='inner hero-image'>

             <h3>{daysIn}  Days in</h3>

        </section>
    );
}


