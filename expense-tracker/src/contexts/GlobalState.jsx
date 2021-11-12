import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Global state is a array empty or get saved data from localStorage
const initialState = {
    incomeTransactions:
        JSON.parse(localStorage.getItem("incomeTransactions")) || [],
    expenseTransactions:
        JSON.parse(localStorage.getItem("expenseTransactions")) || [],
};

export const GlobalContext = createContext(initialState);

//Global Context Provider
export const GlobalContextProvider = ({ children }) => {
    //hook to use call the Reducer to change the Global state "initialState"
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //useEffect to the state in localStorage
    useEffect(() => {
        localStorage.setItem(
            "incomeTransactions",
            JSON.stringify(state.incomeTransactions)
        );
        localStorage.setItem(
            "expenseTransactions",
            JSON.stringify(state.expenseTransactions)
        );
    });

    //Function with the action and the state how get to change
    const addIncome = (incomeTransaction) => {
        dispatch({
            type: "ADD_INCOME",
            payload: incomeTransaction,
        });
    };

    const addExpense = (expenseTransaction) => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenseTransaction,
        });
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                incomeTransactions: state.incomeTransactions,
                expenseTransactions: state.expenseTransactions,
                addIncome,
                addExpense,
                deleteTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
