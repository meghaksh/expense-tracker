import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //We are using approch 1 : individual states for each input
  //For approach 1
  const [enteredTitle, setEnteredTitle] = useState(""); //useState function takes default value of the input field
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //For approach 2 and 3
  // const [userInput, setUserInput] = useState({
  //     enteredtitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    //For state change, either use approach 1 or 3.

    //Approach 1: inidividual state update
    setEnteredTitle(event.target.value);

    //Approach 2: object state update, however, this may be inconsistent sometimes.
    // setUserInput({
    //     ...userInput,
    //     enteredtitle: event.target.value,
    // });

    //Approach 3: use inner annonymous arrow function which takes previous state as argument and change to that state
    //this ensures that even though there is scheduling of state change, always exactly previous state is changed. and not any other.
    //this is a consistent update.
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredtitle: event.target.value
    //     };
    // });
  };

  const amountChangeHandler = (event) => {
    //Approach 1
    setEnteredAmount(event.target.value);

    //Approach 2
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    //Approach 3
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredAmount: event.target.value
    //     };
    // });
  };

  const dateChangeHandler = (event) => {
    //Approach 1
    setEnteredDate(event.target.value);

    //Approach 2
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

    //Approach 3
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate: event.target.value
    //     };
    // });
  };

  const submitHandler = (event) => {
    //On any form submit, default behaviour is to send the request to the server and
    //reload the page. We want to handle the submit event in javascript itself so we prevent the default behaviour.
    event.preventDefault(); //default javascript behaviour is prevented.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // This + sign enforces enteredAmount to be a number and not string
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    //clearing the filled form data
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
