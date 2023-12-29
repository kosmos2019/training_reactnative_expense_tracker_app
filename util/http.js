import axios from "axios";

const BACKEND_URL = "https://expense-app-back-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  console.log(response.data);

  for (const key in response.data) {
    const expense = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date ? new Date(response.data[key].date) : null,
      description: response.data[key].description,
    };

    expenses.push(expense);
  }
  
  return expenses;
}
