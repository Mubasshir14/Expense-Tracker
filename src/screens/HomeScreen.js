import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getExpenses, saveAllExpenses } from '../storage/expenseStorage';
import ExpenseItem from '../components/ExpenseItem';

export default function HomeScreen({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data.reverse());
    };

    const unsubscribe = navigation.addListener('focus', loadExpenses);
    return unsubscribe;
  }, [navigation]);

  // ✅ Delete (state + storage sync)
  const handleDelete = (id) => {
    setExpenses(prev => {
      const updated = prev.filter(e => String(e.id) !== String(id));
      saveAllExpenses([...updated].reverse());
      return updated;
    });
  };

  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <View style={styles.container}>
      {/* Total */}
      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total Expense</Text>
        <Text style={styles.totalAmount}>৳ {totalExpense}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <Button
          title="➕ Add Expense"
          onPress={() => navigation.navigate('AddExpense')}
        />
        <Button
          title="📊 Stats"
          onPress={() => navigation.navigate('Stats')}
        />
      </View>

      {/* Expense List */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ExpenseItem item={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No expenses added yet</Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  totalCard: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  totalLabel: {
    color: '#E8F5E9',
    fontSize: 14,
  },
  totalAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#777',
  },
});
