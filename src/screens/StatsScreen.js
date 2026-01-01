import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useEffect, useState } from 'react';
import { getExpenses } from '../storage/expenseStorage';

const COLORS = ['#4CAF50', '#FFC107', '#03A9F4', '#E91E63', '#9C27B0'];

export default function StatsScreen() {
  const [chartData, setChartData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const load = async () => {
      const expenses = await getExpenses();

      if (!expenses.length) {
        setChartData([]);
        setTotal(0);
        return;
      }

      const grouped = {};
      let sum = 0;

      expenses.forEach(e => {
        const amt = Number(e.amount);
        sum += amt;
        grouped[e.category] = (grouped[e.category] || 0) + amt;
      });

      const data = Object.keys(grouped).map((key, i) => ({
        name: key,
        amount: grouped[key],
        color: COLORS[i % COLORS.length],
        legendFontColor: '#444',
        legendFontSize: 14,
      }));

      setChartData(data);
      setTotal(sum);
    };

    load();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>📊 Expense Statistics</Text>

      {/* Total Card */}
      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total Expense</Text>
        <Text style={styles.totalAmount}>৳ {total}</Text>
      </View>

      {/* Empty State */}
      {!chartData.length && (
        <Text style={styles.emptyText}>No expense data to show</Text>
      )}

      {/* Pie Chart */}
      {chartData.length > 0 && (
        <PieChart
          data={chartData}
          width={Dimensions.get('window').width - 40}
          height={240}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          chartConfig={{
            color: () => '#000',
          }}
          style={styles.chart}
        />
      )}

      {/* Breakdown */}
      {chartData.map(item => (
        <View key={item.name} style={styles.row}>
          <View style={[styles.dot, { backgroundColor: item.color }]} />
          <Text style={styles.category}>{item.name}</Text>
          <Text style={styles.amount}>৳ {item.amount}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  totalCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  totalLabel: {
    color: '#E8F5E9',
    fontSize: 14,
  },
  totalAmount: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 6,
  },
  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
  chart: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
    elevation: 2,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  category: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
