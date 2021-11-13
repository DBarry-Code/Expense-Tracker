import React from "react";
import { amountToCurrency } from "../../helper/calculations";

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
