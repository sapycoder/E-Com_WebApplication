import React, { createContext, useContext, useReducer } from "react";

//PREPARE DATA LAYER
export const StateContext = createContext();

//WRAP OUT APP AND PROVIDE DATA LAYER
export const StateProvider = ({ reducer, initialState, children }) =>
(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//PULL INFORMATION FROM DATA LAYER
export const useStateValue = () => useContext(StateContext);