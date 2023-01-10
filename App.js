import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import { CurrentWeatherContextProvider } from './context/currentWeatherContext';

import HomePage from './pages/home/homePage';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <CurrentWeatherContextProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerTitleStyle: { fontWeight: 'bold', color: 'white', },
            headerStyle: { backgroundColor: '#7888FF' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: { height: 60, backgroundColor: '#4A68FF', }
          }}>
          <Tab.Screen name="Clima proximo da sua região"
            component={HomePage}
            options={{
              tabBarLabel: "Agora",
              tabBarLabelStyle: { fontSize: 18 },
              tabBarIcon: ({ color, size }) =>
                (<Icon name="sun" color={color} size={size} />)
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </CurrentWeatherContextProvider>
  );
}

