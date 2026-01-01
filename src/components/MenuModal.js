import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuModal({ visible, onClose, navigation }) {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.menu}>
          <Text style={styles.title}>Menu</Text>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('Home');
              onClose();
            }}
          >
            <Text>🏠 Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('AddExpense');
              onClose();
            }}
          >
            <Text>➕ Add Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('Stats');
              onClose();
            }}
          >
            <Text>📊 Stats</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={{ marginTop: 20, color: 'red' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    paddingVertical: 12,
  },
});
