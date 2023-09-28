import React from 'react';
import TrackBarModal from '../Custom Hooks/Forms/Track Bar/TrackBarModal';
import TrackSubmitModal from './TrackSubmitModal';
import AppMainContext from '../Custom Hooks/AppMainContext';
import { useState, useContext, useEffect } from 'react';

const MainModal = () => {
    

    const {trackHistoryState, setTrackHistoryState, //History Modal

        trackMainSubmitState, setTrackMainSubmitState //Main Modal
    
    
    } = useContext(AppMainContext);




    return (
        <>


    {trackHistoryState 
    && <TrackBarModal></TrackBarModal>}

      {trackMainSubmitState 
      && <TrackSubmitModal></TrackSubmitModal>}
        </>
    );
}


export default MainModal;