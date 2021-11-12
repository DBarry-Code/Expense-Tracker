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

    const totalExpense = expenseAmounts
        .reduce((accumulator, item) => (accumulator += item), 0)
        .toFixed(2);

    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h3>0.00 €</h3>
            <div className='income-expense'>
                <div className='plus'>
                    <h3>Income</h3>
                    <p>+ {totalIncome} €</p>
                </div>
                <div className='minus'>
                    <h3>Expenses</h3>
                    <p>- {totalExpense} €</p>
                </div>
            </div>
        </div>
    );
};

export default Balance;
