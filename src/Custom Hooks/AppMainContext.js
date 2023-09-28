import React from 'react';
import { useState } from 'react';


const AppMainContext = React.createContext();

export const AppMainProvider = ({children}) =>{
    const [trackHistoryState, setTrackHistoryState] = useState(false);

    const [trackMainSubmitState, setTrackMainSubmitState] = useState(false);


    return (
        <AppMainContext.Provider value={{
            
            trackHistoryState, setTrackHistoryState,

            trackMainSubmitState, setTrackMainSubmitState

        }}>
         {children}
        </AppMainContext.Provider>
    )


}



export default AppMainContext;