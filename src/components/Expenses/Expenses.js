import ExpenseItem from "./ExpenseItem";
import Card from "../../components/UI/card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const YearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        InizialSelectedYear={year}
        onYearChange={YearChangeHandler}
      ></ExpensesFilter>
      {year}
      {props.items
        .filter((x) => {
          return x.date.getFullYear() === Number(year);
        })
        .map((x) => (
          <ExpenseItem
            title={x.title}
            key={x.id}
            amount={x.amount}
            date={x.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
