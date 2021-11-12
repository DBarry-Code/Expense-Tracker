import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

// Balance Component to Display the total of the Income and Expense
// and to display Income and Expense by his own.
const Balance = () => {
    const { incomeTransactions, expenseTransactions } =
        useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(
        (incomeTransaction) => incomeTransaction.incomeAmount
    );
    const expenseAmounts = expenseTransactions.map(
        (expenseTransaction) => expenseTransaction.expenseAmount
    );

    const totalIncome = incomeAmounts
        .reduce((accumulator, item) => (accumulator += item), 0)
        .toFixed(2);

    const incomeCurrency = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalIncome);

    const totalExpense = expenseAmounts
        .reduce((accumulator, item) => (accumulator += item), 0)
        .toFixed(2);

    const expenseCurrency = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalExpense);

    const balance = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalIncome - totalExpense);

    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h3>{balance}</h3>
            <div className='income-expense'>
                <div className='plus'>
                    <h3>Income</h3>
                    <p>+ {incomeCurrency}</p>
                </div>
                <div className='minus'>
                    <h3>Expenses</h3>
                    <p>- {expenseCurrency}</p>
                </div>
            </div>
        </div>
    );
};

export default Balance;
