import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpenses.css";

function NewExpenses(props) {
  const ExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expenses">
      <ExpenseForm ExpenseData={ExpenseDataHandler} />
    </div>
  );
}

export default NewExpenses;
