import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//initial state
const initialState = {
    employees: []
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>  {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const removeEmployee = (id) => {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        })
    }

    const addEmployee = (employee) => {
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: employee
        })
    }

    const editEmployee = (employee) => {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employee
        })
    }

    return (
        <GlobalContext.Provider value={{
            employees: state.employees,
            removeEmployee,
            addEmployee,
            editEmployee
        }}>
            {children}
        </GlobalContext.Provider>
    )

}