import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

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
      {/* conditional rendering */}
      {/* {expenseContent} */}
      <ExpensesList items = {filteredItems} />
    </Card>
  );
}

export default Expenses;