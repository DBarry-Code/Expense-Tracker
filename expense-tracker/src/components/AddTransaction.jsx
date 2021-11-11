import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
    const { addIncome, addExpense } = useContext(GlobalContext);

    //Income Part: States and Handler

    const [income, setIncome] = useState({ incomeText: "", incomeAmount: 0 });
    const { incomeText, incomeAmount } = income;

    const onChangeIncome = (event) => {
        setIncome({ ...income, [event.target.name]: event.target.value });
    };

    const onSubmitIncome = (event) => {
        event.preventDefault();

        const newIncomeTransaction = {
            id: uuidv4(),
            incomeText,
            incomeAmount: incomeAmount * 1,
        };
        addIncome(newIncomeTransaction);
        setIncome({ incomeText: "", incomeAmount: 0 });
    };

    //Expense Part: States and Handler

    const [expense, setExpense] = useState({
        expenseText: "",
        expenseAmount: 0,
    });
    const { expenseText, expenseAmount } = expense;

    const onChangeExpense = (event) => {
        setExpense({ ...expense, [event.target.name]: event.target.value });
    };

    const onSubmitExpense = (event) => {
        event.preventDefault();

        const newExpenseTransaction = {
            id: uuidv4(),
            expenseText,
            expenseAmount: expenseAmount * 1,
        };

        addExpense(newExpenseTransaction);
        setExpense({ expenseText: "", expenseAmount: 0 });
    };

    return (
        <div className='form-wrapper'>
            <form onSubmit={onSubmitIncome}>
                <div className='input-group income'>
                    <input
                        type='text'
                        name='incomeText'
                        value={incomeText}
                        placeholder='Add Income...'
                        autoComplete='off'
                        onChange={onChangeIncome}
                    />
                    <input
                        type='number'
                        name='incomeAmount'
                        value={incomeAmount}
                        placeholder='Amount'
                        autoComplete='off'
                        onChange={onChangeIncome}
                    />
                    <input type='submit' value='Submit' />
                </div>
            </form>
            {/* Expense Part */}
            <form onSubmit={onSubmitExpense}>
                <div className='input-group expense'>
                    <input
                        type='text'
                        name='expenseText'
                        value={expenseText}
                        placeholder='Add Expense...'
                        autoComplete='off'
                        onChange={onChangeExpense}
                    />
                    <input
                        type='number'
                        name='expenseAmount'
                        value={expenseAmount}
                        placeholder='Amount'
                        autoComplete='off'
                        onChange={onChangeExpense}
                    />
                    <input type='submit' value='Submit' />
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;
