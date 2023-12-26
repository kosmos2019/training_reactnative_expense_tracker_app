import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-12-20"),
  },
];

export const ExpensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: DUMMY_EXPENSES,
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state = [{ id: id, ...action.payload }, ...state];
    },
    updateExpense: (state, action) => {
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...action.payload.data, ...updatableExpense };
      state[updatableExpenseIndex] = updatedItem;
    },
    deleteExpense: (state, action) => {
      state.filter((expense) => expense.id !== action.payload);
    },
  },
});

export const addExpense = ExpensesSlice.actions.addExpense;
export const updateExpense = ExpensesSlice.actions.updateExpense;
export const deleteExpense = ExpensesSlice.actions.deleteExpense;
export default ExpensesSlice.reducer;
