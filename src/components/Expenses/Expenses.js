import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterHandleChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandleChange}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
