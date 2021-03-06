import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

/**
 * This component is a representive component to display the Expenslist
 * @component ExpenseTransaction
 * @returns {JSX}
 */
const ExpenseList = () => {
    // import form global state
    const { expenseTransactions } = useContext(GlobalContext);

    return (
        <div className='transactions transactions-expense'>
            <h2>Transaction History</h2>
            <ul className='transaction-list'>
                {expenseTransactions.map((expenseTransaction) => (
                    <ExpenseTransaction
                        key={expenseTransaction.id}
                        expenseTransaction={expenseTransaction}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
