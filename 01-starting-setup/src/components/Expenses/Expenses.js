import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredItems = props.items.filter((expense)=>{
      return expense.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p>No expenses found!</p>
    if(filteredItems.length > 0){
      expenseContent = filteredItems.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))
    }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* conditional rendering */}
      {expenseContent}
   
    </Card>
  );
}

export default Expenses;