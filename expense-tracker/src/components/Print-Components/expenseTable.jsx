import React from "react";
import { amountToCurrency } from "../../helper/calculations";

const ExpenseTable = ({ expenseTransaction }) => {
    const amountCurrency = amountToCurrency(expenseTransaction.expenseAmount);
    return (
        <tr key={expenseTransaction.id} className='table-danger'>
            <th scope='row'>{expenseTransaction.expenseText}</th>
            <td>{amountCurrency}</td>
        </tr>
    );
};

export default ExpenseTable;
