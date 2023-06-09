import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // const clickHandler = () =>{
  //   console.log('clicked!!')
  // }
  //THIS IS A STATELESS/DUMB COMPONENT. (only outputs, doesn't manage state)
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>EVENT STATE</button> */}
    </Card>
  );
}

export default ExpenseItem;