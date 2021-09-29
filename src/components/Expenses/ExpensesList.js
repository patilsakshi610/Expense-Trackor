import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpenseList.length === 0) {
    return <p className="expenses-list__fallback">No data found </p>;
  }

  return (
    <ul className=".expenses-list">
      {props.filteredExpenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
