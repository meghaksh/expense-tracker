// import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //react hook to reflect any state changes in this component by again calling the component function
  //useState returns array with two elements. Current value and the function which changes the value
  //here we are using array destructuring to get those two elements and assign to two variables.
  // const [title, setTitle] = useState(props.title);
  // console.log("Outside : " +  title);
  // const clickHander = () => {
  //   setTitle("Updated!");
  //   console.log("Updated" + title);
  // };
  return (
    //Example of Composition. Anything between <Card> and </Card> will be passed into Card Component as a children.
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHander}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
