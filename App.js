import React, {useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

import Colors from './src/constants/Colors.constant';
import Sizes from './src/constants/Sizes.constant';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen';

import {scaleSizeUI} from './src/utils/scaleSizeUI.util';

import IconAdd from "./src/icons/IconAdd.icon";

const Stack = createNativeStackNavigator();

const RenderHomeScreen = () => <HomeScreen />;

const MainTabs = () => {
  const ref = useRef();

  const _renderIcon = (routeName, selectedTab) => {
    // switch (routeName) {
    //   case 'Home':
    //     return 'home';
    //   case 'Chart':
    //     return 'home';
    //   case 'Card':
    //     return 'home';
    //   case 'Profile':
    //     return 'home';
    // }
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      screenOptions={{
        headerShown: false,
      }}
      ref={ref}
      type="UP"
      bgColor={Colors.primary}
      initialRouteName="Home"
      renderCircle={({selectedTab, navigate}) => (
        <TouchableOpacity
          style={styles.tabMiddleButton}
          onPress={() => navigate('Payment')}>
           <IconAdd />
        </TouchableOpacity>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Home"
        position="LEFT"
        component={RenderHomeScreen}
      />
      <CurvedBottomBar.Screen
        name="Chart"
        position="LEFT"
        component={RenderHomeScreen}
      />
      <CurvedBottomBar.Screen
        name="Card"
        component={RenderHomeScreen}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Profile"
        component={RenderHomeScreen}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="MainTab" component={MainTabs}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    bottom: Sizes.largerH
  }
});

export default App;
