import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";

// Balance Component to Display the total of the Income and Expense
const Balance = () => {
    // Global states over useContext
    const { incomeTransactions, expenseTransactions } =
        useContext(GlobalContext);

    // Map over the state to get a new array with the vaules inside
    const incomeAmounts = incomeTransactions.map(
        (incomeTransaction) => incomeTransaction.incomeAmount
    );
    const expenseAmounts = expenseTransactions.map(
        (expenseTransaction) => expenseTransaction.expenseAmount
    );

    // Summary all Income values the new arrys with two digits
    const totalIncome = incomeAmounts
        .reduce((accumulator, item) => (accumulator += item), 0)
        .toFixed(2);

    // convert the Income Summary a curency format
    const incomeCurrency = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalIncome);

    // Summary all Expanse values the new arrys with two digits
    const totalExpense = expenseAmounts
        .reduce((accumulator, item) => (accumulator += item), 0)
        .toFixed(2);
    // convert the Expanse Summary to a curency format
    const expenseCurrency = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalExpense);

    //calculate the blance and convert to currency format
    const balance = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(totalIncome - totalExpense);

    // Dynamic className to get diffrent color
    const classes = [];

    if (parseInt(balance) === 0) {
        classes.push("balance");
    } else if (parseInt(balance) > 0) {
        classes.push("balance plus");
    } else {
        classes.push("balance minus");
    }

    return (
        <div className={classes}>
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
