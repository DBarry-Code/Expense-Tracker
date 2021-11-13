import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { amountToCurrency } from "../../helper/calculations";

const IncomeTransactions = ({ incomeTransaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

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
