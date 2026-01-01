import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ExpenseItem({ item, onDelete }) {
  const confirmDelete = () => {
    Alert.alert(
      'Delete Expense',
      'Are you sure you want to delete this expense?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => onDelete(item.id),
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.date}>
          {new Date(item.date).toDateString()}
        </Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>৳ {item.amount}</Text>

        {/* 🗑️ Delete Button */}
        <TouchableOpacity onPress={confirmDelete}>
          <Text style={styles.delete}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  left: {
    flex: 1,
  },
  right: {
    alignItems: 'flex-end',
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 6,
  },
  delete: {
    fontSize: 18,
  },
});
