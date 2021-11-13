import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { amountToCurrency } from "../../helper/calculations";

const ExpenseTransaction = ({ expenseTransaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const amountCurrency = amountToCurrency(expenseTransaction.expenseAmount);

    return (
        <li className='transaction'>
            <span className='transaction-text'>
                {expenseTransaction.expenseText}
            </span>
            <span className='transaction-amount'>{amountCurrency}</span>
            <button
                onClick={() => deleteTransaction(expenseTransaction.id)}
                name='delete button'
                className='delete-btn'
            >
                <i className='fas fa-trash'></i>
            </button>
        </li>
    );
};

export default ExpenseTransaction;
