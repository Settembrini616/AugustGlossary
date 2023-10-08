import React from 'react';
import { useState, useReducer, useEffect } from 'react';


const AppMainContext = React.createContext();





export const AppMainProvider = ({children}) =>{
    const [trackHistoryState, setTrackHistoryState] = useState(false);

    const [trackMainSubmitState, setTrackMainSubmitState] = useState(false);

    const [currentDate, setCurrentDate] = useState(new Date());
    
    const [questionModal, setQuestionModal] = useState(false);

    const [serverDate, setServerDate] = useState();


    const fetchServerDate = async () =>{

      try {
        const response = await fetch('/api/current-date');
        const data = await response.json();
        setServerDate(new Date(data.dateNow));

      } catch (error) {
        console.error('Ошибка при получении даты с сервера', error);
      }
    }

    useEffect(() => {
      
      fetchServerDate();
    }, []);

   



 
    const ACTIONS = {
        PLUS: 'PLUS',
        MINUS:'MINUS',
        QUESTION:'QUESTION',
        UPDATE_INPUT: 'UPDATE_INPUT'
      
      }
      
      
      const initialState = {
        inputValue: 30,
        showQuestionModal: false
      }
      
      
      const reducerTrackbar = (stateTrackbar, action) =>{
        switch(action.type){
          case ACTIONS.PLUS:
            if(stateTrackbar.inputValue >= 100){
                return {...stateTrackbar}
              } else{
                return {...stateTrackbar, inputValue:stateTrackbar.inputValue+1};
              }
          case ACTIONS.MINUS:
            if(stateTrackbar.inputValue > 0){
              return {...stateTrackbar, inputValue:stateTrackbar.inputValue-1};
            }else{
              return {...stateTrackbar}
            }
        //   case ACTIONS.QUESTION:
        //     return {...stateTrackbar, showQuestionModal:!stateTrackbar.showQuestionModal };
          case ACTIONS.UPDATE_INPUT:
            return {...stateTrackbar, inputValue:action.payload}
          default:
            return stateTrackbar; 
        }
      }

      const [stateTrackbar, dispatchTrackbar] = useReducer(reducerTrackbar, initialState);



    return (
        <AppMainContext.Provider value={{
            
            trackHistoryState, setTrackHistoryState, //модальное окно истории успеха

            trackMainSubmitState, setTrackMainSubmitState, //модальное окно ежедневного отчета

            currentDate, setCurrentDate, //общая дата

            ACTIONS, initialState,

            
             stateTrackbar, dispatchTrackbar, //редьюсер тракбара


            questionModal, setQuestionModal,


            serverDate, setServerDate //серверная дата

        }}>
         {children}
        </AppMainContext.Provider>
    )


}

export default AppMainContext;