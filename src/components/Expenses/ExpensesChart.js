import Chart from "../Chart/Chart";
import React from "react";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan  ", value: 0 },
    { label: "feb  ", value: 0 },
    { label: "mar  ", value: 0 },
    { label: "april", value: 0 },
    { label: "may  ", value: 0 },
    { label: "June ", value: 0 },
    { label: "July ", value: 0 },
    { label: "Aug  ", value: 0 },
    { label: "Sept ", value: 0 },
    { label: "Oct  ", value: 0 },
    { label: "Nov  ", value: 0 },
    { label: "Dec  ", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
