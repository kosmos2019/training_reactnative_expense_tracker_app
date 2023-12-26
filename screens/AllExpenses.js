import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
// import { useDispatch, useSelector } from "react-redux";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  // const expensesCtx = useSelector((state) => state.expenses);
  // const dispatch = useDispatch();

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
