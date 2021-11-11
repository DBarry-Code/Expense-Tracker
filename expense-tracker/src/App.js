import React from "react";
import { GlobalContextProvider } from "./contexts/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/incomeList";
import ExpenseList from "./components/expenseList";
import "./App.css";

const App = () => {
    return (
        <GlobalContextProvider>
            <div className='container'>
                <div className='app-wrapper'>
                    <Header />
                    <Balance />
                    <AddTransaction />
                    <IncomeList />
                    <ExpenseList />
                </div>
            </div>
        </GlobalContextProvider>
    );
};

export default App;
