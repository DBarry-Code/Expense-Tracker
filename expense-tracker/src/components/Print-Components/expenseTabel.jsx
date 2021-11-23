import React from "react";
import { amountToCurrency } from "../../helper/calculations";

/**
 * This component is a locgic compontent Expense table for the Printsite
 * @param {object} expenseTransaction
 * @returns {JSX}
 */
const ExpenseTable = ({ expenseTransaction }) => {
    const amountCurrency = amountToCurrency(expenseTransaction.expenseAmount);
    return (
        <tr key={expenseTransaction.id} className='table-danger'>
            <th scope='row'> {expenseTransaction.expenseText}</th>
            <td>- {amountCurrency}</td>
        </tr>
    );
};

export default ExpenseTable;
