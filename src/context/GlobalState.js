import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, text: "Food", amount: -55},
        {id: 2, text: "Book", amount: -35},
        {id: 3, text: "Salary", amount: 400},
    ] 
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}