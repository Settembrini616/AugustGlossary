import {React, useState, useEffect, useCallback} from 'react';
import { useContext } from 'react';

export function useCustomLink(route, closeMe){
   
    return {
        style:{
            textDecoration: 'none'
        },
        to: route,
        onClick:closeMe,

    }
}

export function useClose(stateFromTheRoot, setStateFromTheRoot){

    const [isClosing, setIsClosing] = useState(false);

    

 const closeTheWindowTrackBar = (e) => {
    if(e) e.preventDefault();

    setIsClosing(true);

    setTimeout(()=>{

        setIsClosing(false);
        setStateFromTheRoot(false);

    }, 300);
 }

 const closeWithTheKey = (e) => {
    if(e.code === 'Escape') closeTheWindowTrackBar();
 }

useEffect(()=>{
    if(stateFromTheRoot){
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    return () => {
        document.body.style.overflow = 'auto'
    }
});


 useEffect(()=>{

    window.addEventListener('keydown', closeWithTheKey);

    return ()=>{
        window.removeEventListener('keydown', closeWithTheKey);
    }

 },[]);

 return [isClosing, closeTheWindowTrackBar];


}