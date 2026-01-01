import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ title, onMenu }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onMenu}>
        <Text style={styles.menu}>☰</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    color: '#fff',
    fontSize: 24,
  },
});
