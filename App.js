import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from './pages/home/homePage';


export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        initialRouteName='Home'
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato' }}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: { backgroundColor: '#5B8C2A' },
          tabBarInactiveTintColor: "#A9A9A9",
          tabBarInactiveBackgroundColor: '',
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: '#5B8C29',
        }}>
        <Tab.Screen name="Home" component={HomePage} Options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Feed" component={HomePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}