import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (evt) => {
        setEnteredTitle(evt.target.value);
    }

    const amountChangeHandler = (evt) => {
        setEneteredAmount(evt.target.value);
    }

    const dateChangeHandler = (evt) => {
        setEnteredDate(evt.target.value);
    }

    const submitHandler = (evt) => {
        evt.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amout: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseDate);
        //two-way binding
        setEnteredTitle('');
        setEneteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type='number'
                    value={enteredAmount} //two-way binding
                    min="0.01"
                    step="0.01"
                    onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type='date'
                    value={enteredDate}
                    min="2019-01-01"
                    max="2022-12-31"
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__action">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;