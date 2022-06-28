import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
