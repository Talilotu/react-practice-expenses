import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
