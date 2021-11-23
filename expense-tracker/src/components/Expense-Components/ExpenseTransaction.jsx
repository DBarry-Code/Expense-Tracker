import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { amountToCurrency } from "../../helper/calculations";

/**
 * This component is the logic component of the Expenslist
 * and diplay the expense data
 * Include the delet function
 * @param { object } expenseTransaction
 * @returns {JSX}
 */
const ExpenseTransaction = ({ expenseTransaction }) => {
    // Global action to delete the position by id
    const { deleteTransaction } = useContext(GlobalContext);

    // Callback to format the Amount to currency format!
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
