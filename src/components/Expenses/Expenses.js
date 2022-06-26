import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
// import ExpenseDate from "./ExpenseDate";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js : ", selectedYear);
    setFilteredYear(selectedYear);
  };

  // Assignment : we take the every item from original array and return the filtered array based on year
  // this is a new array returned and not the original array is modified.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // 67. Display List Conditionally Method 3 : (Later in 68 moved to new component ExpensesList)
  // Here we have default value of expensesContent as a paragraph. This is a valid statement. We can assign paragraph to variable.
  // if the filtered list size is greater than 0, we overwrite the expenseContent by ExpenseItem components.

  // let expensesContent = <p>No Expenses Found.</p>
  // if(filteredExpenses.length>0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }

  return (
    <div>
      {/*Example of Composition. Anything between <Card> and </Card> will be passed into Card Component as a children. */}
      <Card className="expenses">
        {/*Here Selected is used for two way binding. The default value of useState is 2020. 
    We are passing that value as part of the prop and this value will be use as default when the component is loaded.  */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/**This component is responsible for loading charts
         * of expenses month wise.
         */}
        <ExpensesChart expenses={filteredExpenses} />

        {/* This dynamic expression uses map function of javascript
        which go through each element in the array and do some task on them.
        Here, for each item, we are making ExpenseItem component and assigning their 
        values.  */}
        {/* key prop is added later(video 66), to assign unique key to each 
        instance of the ExpenseItem.  */}
        {/* {props.items.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* Assignment : We changed the above code when added filter on the year during the assignment. 
        Basically, we are not taking props.items and mapping them. 
        Instead we are mapping the items which are already filtered based on the year. 
        */}
        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* 67. Display List Conditionally Method 1 :
        Here we display the list conditionally. We use a ternary experession. 
        If there is no item in the list, we just display a message else display the list of items.*/}

        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* 67. Display List Conditionally Method 2
        The above ternary expression can be bit hard to read. 
        We can fine tune or restructure this using a trick of && operator as shown below. 
        Javascript works in a way that if we use && operator and if the first condition is met, 
        it returns the content of the second condition as a result.
        This trick allow us to write shorter code and used in many react projects 
        So basically we split the long ternary expression into two different conditions 
        using && operator trick.


        
        */}

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        } */}

        {/* However above two methods are a lot of logic inside JSX which we can pull outside of the JSX and make the JSX simpler. 
        We use method 3 for that.  
        Below expensesContent is loaded outside the JSX based on a specific condition it passes. */}
        {/* This is replaced by ExpensesList component in video 68 */}
        {/* {expensesContent} */}

        <ExpensesList items={filteredExpenses} />

        {/* Below are the hardcoded expense items which is replaced
        by the above dynamic expression.  */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
