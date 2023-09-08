import {React, useState} from 'react';

export function useCustomLink(route, closeMe){
   
    return {
        style:{
            textDecoration: 'none'
        },
        to: route,
        onClick:closeMe,

    }
}


export function useClose(){

const[openModal, setOpenModal] = useState(true)

const closeTheWindow = (e) =>{
    e.preventDeafult();

    setOpenModal(prev => !prev)
}

const switchWindow = openModal ? 'open-modal' : 'close-modal';


return {switchWindow, closeTheWindow}

}