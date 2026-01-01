import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuModal from '../components/MenuModal';

export default function MainLayout({ children, navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Header
        title="Expense Tracker"
        onMenu={() => setMenuOpen(true)}
      />

      <MenuModal
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
        navigation={navigation}
      />

      <View style={styles.content}>
        {children}
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
