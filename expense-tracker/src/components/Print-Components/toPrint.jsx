import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import IncomeTabel from "./incomeTabel";
import ExpenseTabel from "./expenseTabel";
import {
    totalincome,
    totalexpense,
    totalAmountIncome,
    totalAmountExpense,
    formatBalancetoCurrency,
    balanceFromBg,
} from "../../helper/calculations";
import { Link } from "react-router-dom";

const ToPrint = () => {
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

    const rowBg = balanceFromBg(balance);

    return (
        <div className='Print-page'>
            <Link className='link-primary print-btn-back float-start' to='/'>
                <i class='fas fa-backspace'> Back</i>
            </Link>
            <button
                onClick={() => window.print()}
                className='print-btn-print link-primary float-end'
            >
                <i class='fas fa-print'> Print</i>
            </button>
            <table className='table table-hover'>
                <thead>
                    <tr className='table-dark'>
                        <th scope='col'>Transaction</th>
                        <th scope='col'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeTransactions.map((incomeTransaction) => (
                        <IncomeTabel
                            key={incomeTransaction.id}
                            incomeTransaction={incomeTransaction}
                        />
                    ))}
                    <tr className='table-dark'>
                        <th scope='row'>Total Income:</th>
                        <td className='fw-bold'> + {incomeTotalCurrency}</td>
                    </tr>
                    {expenseTransactions.map((expenseTransaction) => (
                        <ExpenseTabel
                            key={expenseTransaction.id}
                            expenseTransaction={expenseTransaction}
                        />
                    ))}
                    <tr className='table-dark'>
                        <th scope='row'>Total Expense:</th>
                        <td className='fw-bold'> - {expenseTotalCurency}</td>
                    </tr>
                    <tr className={rowBg}>
                        <th scope='row'>Balance:</th>
                        <td className='fw-bold'> {balance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ToPrint;
