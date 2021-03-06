import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-AU", { month: "long" });
  const day = props.date.toLocaleString("en-AU", { day: "2-digit" });
  const year = props.date.toLocaleString("en-AU", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
