import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

import Colors from './src/constants/Colors.constant';
import Sizes from './src/constants/Sizes.constant';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen';

import { scaleSizeUI } from './src/utils/scaleSizeUI.util';

import IconAdd from './src/icons/IconAdd.icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Payment" component={CreateTaskScreen} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MainTab" component={MainTabs} />
          <Stack.Screen name="Payment" component={CreateTaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabMiddleButton: {
    width: Sizes.huger + Sizes.huge,
    height: Sizes.huger + Sizes.huge,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    bottom: Sizes.largerH,
  },
});

export default App;
