import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const addExpenseFormHandler = () => {
     (setIsAddingExpense(true));
  };
  const cancelExpenseFormHandler = () => {
     (setIsAddingExpense(false));
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    // pass data to app.js
    props.onAddExpenseData(expenseData);
    setIsAddingExpense(false)
  };

  return (
    <div className="new-expense">
       {!isAddingExpense? (<button onClick={addExpenseFormHandler}>Add New Expense</button>):
    (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {cancelExpenseFormHandler}/>)}
    </div>
  )
}

export default NewExpense;
