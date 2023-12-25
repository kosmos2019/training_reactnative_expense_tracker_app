import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

function ManagerExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    closeModal();
  }

  function cancelExpenseHandler() {
    closeModal();
  }

  function confirmExpenseHandler() {
    const today = new Date();

    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Text update!!!",
        amount: 21.9,
        date: new Date("2023-11-22"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Text add!!!",
        amount: 59.19,
        date: new Date("2023-12-22"),
      });
    }
    closeModal();
  }

  function closeModal() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          mode="flat"
          style={styles.button}
          onPress={cancelExpenseHandler}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmExpenseHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManagerExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
