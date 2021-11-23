import React from "react";
import { amountToCurrency } from "../../helper/calculations";

/**
 * This component is a locgic compontent Income table for the Printsite
 * @param {object} incomeTransaction
 * @returns {JSX}
 */
const IncomeTable = ({ incomeTransaction }) => {
    const amountCurrency = amountToCurrency(incomeTransaction.incomeAmount);

    return (
        <tr key={incomeTransaction.id} className='table-success'>
            <th scope='row'>{incomeTransaction.incomeText}</th>
            <td>+ {amountCurrency}</td>
        </tr>
    );
};

export default IncomeTable;
