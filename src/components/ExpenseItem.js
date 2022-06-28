import React from "react";

function ExpenseItem(props) {
  return (
    <div className="ExpenseItem">
      <div>{props.date}</div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
