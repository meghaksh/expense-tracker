import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "94.12",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: "124.00",
    date: new Date(2020, 8, 13),
  }
]   




function App() {
  // As part of video 65, this is commented in order to 
  // make use of useState, to add newly added expenses in this Array. 
  // This is removed outside as DUMMY_EXPENSES


  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Car Insurance",
  //     amount: "94.12",
  //     date: new Date(2020, 7, 14),
  //   },
  //   {
  //     id: "e2",
  //     title: "Groceries",
  //     amount: "124.00",
  //     date: new Date(2020, 8, 13),
  //   }
  // ];

  //Here the default value for the exenses will be DUMMY_EXPENSES
  //Later, whenever we add any new expense, it will update the state. 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);





  // Whenever there is a new expense to be added, 
  // this method is called. We received added expense as a parameter. 
  const addExpenseHandler = expense => {
    // console.log("In App.js : ");
    // console.log(expense);

    // this will add our expense at the first position in the array. 
    // we add expenses, and then call spread operator on the expenses array 
    // to pull out all the existing expenses in the array. But this is not a correct way to do it. 
    //setExpenses([expense, ...expenses])

    //Rather, we can use prevExpenses that we receive from react and append to it. 
    // this is a clean way to update values when we are using old snapshot of something. 
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

      

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  //Above JSX is internally converted to the below JSX. This is the exact reason why all jsx should have one root element, else it will throw error in the function.
  // return React.createElement('div',{},
  //        React.createElement(Expenses, {items: expenses})
  //     );
}

export default App;
