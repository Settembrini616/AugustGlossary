import React from 'react';
import TrackBarModal from '../Custom Hooks/Forms/Track Bar/TrackBarModal';
import TrackSubmitModal from './TrackSubmitModal';
import QuestionMainModal from './QuestionMainModal';
import AppMainContext from '../Custom Hooks/AppMainContext';
import { useContext} from 'react';

const MainModal = () => {
    

    const {trackHistoryState, setTrackHistoryState, //History Modal

        trackMainSubmitState, setTrackMainSubmitState,  //Main Modal
        
        questionModal, setQuestionModal
    
    } = useContext(AppMainContext);




    return (
        <>


    {trackHistoryState 
    && <TrackBarModal></TrackBarModal>}

      {trackMainSubmitState 
      && <TrackSubmitModal></TrackSubmitModal>}

      
   {questionModal
      && <QuestionMainModal></QuestionMainModal>}

        </>
    );
}


export default MainModal;