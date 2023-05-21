import React from "react";

function ExpenseItem(props) {
  return <div>
   <p>Title : {props.title}</p> <p>Date : {props.date}</p> <p>Amount: {props.amount}</p>
  </div>;
}

export default ExpenseItem;
