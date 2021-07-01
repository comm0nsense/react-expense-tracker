import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    //1) approach 1 - multiple States
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //2) approach 2 - one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (evt) => {
        //1)
        setEnteredTitle(evt.target.value);
        //2) you are responsible for the whole object, thus -> overriding just title
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: evt.target.value,            
        // })
        //3) here you will have the latest state snapshot
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: evt.target.value }
        // })
    }

    const amountChangeHandler = (evt) => {
        setEneteredAmount(evt.target.value);
    }

    const dateChangeHandler = (evt) => {
        setEnteredDate(evt.target.value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__action">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;