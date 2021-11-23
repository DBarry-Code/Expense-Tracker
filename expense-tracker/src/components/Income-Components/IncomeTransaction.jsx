import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { amountToCurrency } from "../../helper/calculations";

/**
 * This component ist the logic component of the Incomeslist
 * and kdsplay the income data.
 * Include the delet function
 * @param { object } expenseTransaction
 * @returns {JSX}
 */
const IncomeTransactions = ({ incomeTransaction }) => {
    // Global action to delete the position by id
    const { deleteTransaction } = useContext(GlobalContext);

    // Callback to format the Amount to currency format!
    const amountCurrency = amountToCurrency(incomeTransaction.incomeAmount);

    return (
        <li className='transaction'>
            <span className='transaction-text'>
                {incomeTransaction.incomeText}
            </span>
            <span className='transaction-amount'>{amountCurrency}</span>
            <button
                onClick={() => deleteTransaction(incomeTransaction.id)}
                name='delete button'
                className='delete-btn'
            >
                <i className='fas fa-trash'></i>
            </button>
        </li>
    );
};

export default IncomeTransactions;
