import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <div>{props.date}</div>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
