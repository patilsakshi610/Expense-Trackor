import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_expenses = [
  { id: 1, title: "bike", amount: 6783.9, date: new Date() },
  { id: 2, title: "bus", amount: 6783.9, date: new Date(2021, 5, 10) },
  { id: 3, title: "car", amount: 6783.9, date: new Date(2019, 1) },
  { id: 4, title: "rikshaw", amount: 67003.9, date: new Date(2019, 9, 26) },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
