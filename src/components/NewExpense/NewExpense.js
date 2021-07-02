import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    // console.log(stateType);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    //option 1
    // if (isAdding) {
    //     return (
    //         <div className="new-expense">
    //             <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    //         </div>)
    // }

    // return <div className="new-expense">
    //     <button onClick={addingNewExpenseHandler}>Add New Expense</button>
    // </div>

    //option 2
    return (<div className="new-expense">
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler} />
        )}
    </div>);
}

export default NewExpense;