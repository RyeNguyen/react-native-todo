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
import TaskDetailScreen from './src/screens/TaskDetailScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import TaskListScreen from './src/screens/TaskListScreen';
import TabBar from './src/components/TabBar.component';

import { scaleSizeUI } from './src/utils/scaleSizeUI.util';

import IconAdd from './src/icons/IconAdd.icon';
import IconHome from './src/icons/IconHome.icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <IconHome />,
        }}
      />
      <Tab.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <IconAdd />,
        }}
      />
      <Tab.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <IconAdd />,
        }}
      />
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
          <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
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
