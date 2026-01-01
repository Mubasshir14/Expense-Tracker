import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import StatsScreen from '../screens/StatsScreen';
import MainLayout from '../layouts/MainLayout';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Home">
        {(props) => (
          <MainLayout navigation={props.navigation}>
            <HomeScreen {...props} />
          </MainLayout>
        )}
      </Stack.Screen>

      <Stack.Screen name="AddExpense">
        {(props) => (
          <MainLayout navigation={props.navigation}>
            <AddExpenseScreen {...props} />
          </MainLayout>
        )}
      </Stack.Screen>

      <Stack.Screen name="Stats">
        {(props) => (
          <MainLayout navigation={props.navigation}>
            <StatsScreen {...props} />
          </MainLayout>
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}
