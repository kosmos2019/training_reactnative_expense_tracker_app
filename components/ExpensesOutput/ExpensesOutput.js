import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-07-07"),
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
    date: new Date("2023-19-08"),
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
    date: new Date("2023-19-08"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 13.59,
    date: new Date("2023-08-21"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 17.79,
    date: new Date("2023-11-22"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
