import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
    // Global Actions
    const { addIncome, addExpense } = useContext(GlobalContext);

    //Income Part: local states and handler
    const [income, setIncome] = useState({ incomeText: "", incomeAmount: 0 });

    //Destructure to avoit dots!
    const { incomeText, incomeAmount } = income;

    //onChange event handler for input income to get both vules at the same time!
    const onChangeIncome = (event) => {
        setIncome({ ...income, [event.target.name]: event.target.value });
    };

    //onSubmit event handler: Creat a new Object / addIncome get a
    const onSubmitIncome = (event) => {
        event.preventDefault();
        if (incomeText !== "") {
            const newIncomeTransaction = {
                id: uuidv4(),
                incomeText,
                incomeAmount: incomeAmount * 1,
            };
            addIncome(newIncomeTransaction);
            setIncome({ incomeText: "", incomeAmount: 0 });
        }
    };

    //Expense Part: local states and handler

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

        if (expenseText !== "") {
            const newExpenseTransaction = {
                id: uuidv4(),
                expenseText,
                expenseAmount: expenseAmount * 1,
            };

            addExpense(newExpenseTransaction);
            setExpense({ expenseText: "", expenseAmount: 0 });
        }
    };

    return (
        // Income Part
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
