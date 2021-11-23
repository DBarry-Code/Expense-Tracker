import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import {
    totalincome,
    totalexpense,
    totalAmountIncome,
    totalAmountExpense,
    formatBalancetoCurrency,
    balanceClassName,
} from "../../helper/calculations";

/**
 * Balance Component to Display the total of the Income and Expense
 * @returns {JSX}
 */
const Balance = () => {
    // Global states over useContext
    const { incomeTransactions, expenseTransactions } =
        useContext(GlobalContext);

    //Callbacks to get Sum Income and Expenst in Currency format
    const incomeTotalCurrency = totalincome(incomeTransactions);
    const expenseTotalCurency = totalexpense(expenseTransactions);

    //Callback to get Sum Icome and Expense to calculate Balance
    const totalIncome = totalAmountIncome(incomeTransactions);
    const totalExpense = totalAmountExpense(expenseTransactions);

    //Calculate the blance and convert to currency format
    const balance = formatBalancetoCurrency(totalIncome, totalExpense);

    // Calback to get Dynamic className "diffrent color"
    const classes = balanceClassName(balance);

    return (
        <div className={classes}>
            <h2>Your Balance</h2>
            <h3>{balance}</h3>
            <div className='income-expense'>
                <div className='plus'>
                    <h3>Income</h3>
                    <p>+ {incomeTotalCurrency}</p>
                </div>
                <div className='minus'>
                    <h3>Expenses</h3>
                    <p>- {expenseTotalCurency}</p>
                </div>
            </div>
        </div>
    );
};

export default Balance;
