import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  //Assignment 68
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  } 

  const stopEditingHandler = () => {
    setIsEditing(false);
  }


  //below function expects to get enteredExpenseData as a parameter when invoked. 
  //this function will be invoked in the child component ExpenseForm and it is passed as a prop. 
  //This is an example of child-to-parent communication
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, 
      id: Math.random().toString()
    }
    //console.log(expenseData);
    props.onAddExpense(expenseData);

    /**When the form is submitted, we close the form by setting up the state to false. */
    setIsEditing(false);
  }
  return (
    <div className="new-expense">

      {/* Added this button in the Assignment of adding conditional content
      Either we show this button or we show the form to add new expense.  */}
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}



      {/*Below we are passing the function as a prop and it will be invoked in the child component 
      When invoked, it will pass the data to the function. Child-to-parent communication. 
      This function is not getting executed here. It will get executed inside child component, as a prop*/}
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> */}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  );
};

export default NewExpense;
