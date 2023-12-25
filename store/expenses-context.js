import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-20"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.59,
    date: new Date("2023-09-17"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.29,
    date: new Date("2023-12-08"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 13.59,
    date: new Date("2023-08-21"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 17.79,
    date: new Date("2023-11-22"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-07-07"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.59,
    date: new Date("2023-09-17"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.29,
    date: new Date("2023-12-08"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 13.59,
    date: new Date("2023-12-21"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 17.79,
    date: new Date("2023-11-22"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const expenses = [...state];
      expenses[updatableExpenseIndex] = updatedItem;
      return expenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
