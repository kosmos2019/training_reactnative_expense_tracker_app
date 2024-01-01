import axios from "axios";

const BACKEND_URL = "https://expense-app-back-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  console.log(response.data.name);
  return response.data.name;
}

export async function updateExpense(id, expenseData) {
  const response = await axios.put(
    BACKEND_URL + `/expenses/${id}.json`,
    expenseData
  );

  return response.data.name;
}

export async function deleteExpense(id) {
  response = await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expense = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date ? new Date(response.data[key].date) : null,
      description: response.data[key].description,
    };
    console.log(expense);
    expenses.push(expense);
  }
  console.log(expenses.length);
  return expenses;
}
