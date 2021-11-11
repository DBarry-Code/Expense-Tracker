import React from "react";

const ExpenseTransactionn = ({ expenseTransactions }) => {
    return (
        <>
            <li className='transaction'>
                <span className='transaction-text'>
                    {expenseTransactions.expenseText}
                </span>
                <span className='transaction-amount'>
                    {expenseTransactions.expenseAmount}
                </span>
                <button className='delete-btn'>
                    <i className='fas fa-trash'></i>
                </button>
            </li>
        </>
    );
};

export default ExpenseTransactionn;
