import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

/**
 * This component is a representive component to display the Incomeslist
 * and display the Income data.
 * @component IncomeTransaction
 * @returns {JSX}
 */
const IncomeList = () => {
    // Import from global state
    const { incomeTransactions } = useContext(GlobalContext);

    return (
        <div className='transactions transactions-income'>
            <h2>Transaction History</h2>
            <ul className='transaction-list'>
                {incomeTransactions.map((incomeTransaction) => (
                    <IncomeTransaction
                        key={incomeTransaction.id}
                        incomeTransaction={incomeTransaction}
                    />
                ))}
            </ul>
        </div>
    );
};

export default IncomeList;
