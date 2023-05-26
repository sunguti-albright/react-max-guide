import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  //destructuring DUMMY EXPENSES to 'expenses'
const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
//updating expenses based on previous expense snapshot...instead of initial expense state
  const addExpenseHandler = expenseInfo=>{
    setExpenses((prevExpenses)=>{
      return [expenseInfo, ...prevExpenses]
    })
  }


  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <ExpenseItem title={expenses[0].title} date={expenses[0].date.toISOString()} amount={expenses[0].amount}></ExpenseItem>
  //     <ExpenseItem title={expenses[1].title} date={expenses[1].date.toISOString()} amount={expenses[1].amount}></ExpenseItem>
  //     <ExpenseItem title={expenses[2].title} date={expenses[2].date.toISOString()} amount={expenses[2].amount}></ExpenseItem>
  //     <ExpenseItem title={expenses[3].title} date={expenses[3].date.toISOString()} amount={expenses[3].amount}></ExpenseItem>
  //   </div>
  // );
  return (
    <div>
  <NewExpense onAddExpenseData = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
