import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'EXPENSES';

// GET
export async function getExpenses() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

// ADD (🔥 THIS WAS MISSING)
export async function saveExpense(expense) {
  const expenses = await getExpenses();
  expenses.push(expense);
  await AsyncStorage.setItem(KEY, JSON.stringify(expenses));
}

// SAVE ALL (used for delete sync)
export async function saveAllExpenses(expenses) {
  await AsyncStorage.setItem(KEY, JSON.stringify(expenses));
}
