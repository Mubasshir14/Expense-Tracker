import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.icon}>🏠</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Add Expense')}>
        <Text style={styles.icon}>➕</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
        <Text style={styles.icon}>📊</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    fontSize: 22,
  },
});
