import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import IncomeTable from "./incomeTable";
import ExpenseTable from "./expenseTable";
import { totalincome, totalexpense } from "../../helper/calculations";

const ToPrint = () => {
    const { incomeTransactions, expenseTransactions } =
        useContext(GlobalContext);

    const iTotal = totalincome(incomeTransactions);
    const eTotal = totalexpense(expenseTransactions);
    return (
        <div className='Print-page'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Transaction</th>
                        <th scope='col'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeTransactions.map((incomeTransaction) => (
                        <IncomeTable
                            key={incomeTransaction.id}
                            incomeTransaction={incomeTransaction}
                        />
                    ))}
                    <tr className='table-dark'>
                        <th scope='row'>Total Income:</th>
                        <td> + {iTotal}</td>
                    </tr>
                    {expenseTransactions.map((expenseTransaction) => (
                        <ExpenseTable
                            key={expenseTransaction.id}
                            expenseTransaction={expenseTransaction}
                        />
                    ))}
                    <tr className='table-dark'>
                        <th scope='row'>Total Income:</th>
                        <td> - {eTotal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ToPrint;
