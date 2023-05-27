    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

function NewExpense() {
  return (
    <div className="new-expense">
         <ExpenseForm />
    </div>
  
  )
}

export default NewExpense