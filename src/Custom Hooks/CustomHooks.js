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

