import React from "react";
import Header from "./components/Header-Component/Header";
import Balance from "./components/Balance-Components/Balance";
import AddTransaction from "./components/Transactions-Components/AddTransaction";
import IncomeList from "./components/Income-Components/incomeList";
import ExpenseList from "./components/Expense-Components/expenseList";
import "./App.css";

const App = () => {
    return (
        <div className='app-container'>
            <div className='app-wrapper'>
                <Header />
                <Balance />
                <AddTransaction />
                <IncomeList />
                <ExpenseList />
            </div>
        </div>
    );
};

export default App;
