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
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredItems.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </Card>
  );
}

export default Expenses;