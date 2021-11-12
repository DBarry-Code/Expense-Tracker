import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";

const IncomeTransactions = ({ incomeTransaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const amountCurrency = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(incomeTransaction.incomeAmount);

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
