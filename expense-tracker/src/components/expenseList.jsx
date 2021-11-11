import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
    const { expenseTransactions } = useContext(GlobalContext);

    console.log({ expenseTransactions });

    return (
        <div className='transactions transactions-expense'>
            <h2>Transaction History</h2>
            <ul className='transaction-list'>
                {expenseTransactions.map((expenseTransactions) => (
                    <ExpenseTransaction
                        key={expenseTransactions.id}
                        expenseTransactions={expenseTransactions}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
