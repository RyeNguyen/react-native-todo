import React from 'react';

import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { scaleSizeUI } from '../utils/scaleSizeUI.util';
import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';
import LayoutStyles from '../styles/Layout.style';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={[LayoutStyles.layoutShadow, styles.tab]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}>
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    height: scaleSizeUI(72, true),
    backgroundColor: Colors.primaryLighter,
    borderRadius: Sizes.mediumLarge,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
