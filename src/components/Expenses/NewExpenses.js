import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpenses.css";

function NewExpenses(props) {
  const ExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expenses">
      <ExpenseForm ExpenseData={ExpenseDataHandler} />
    </div>
  );
}

export default NewExpenses;
