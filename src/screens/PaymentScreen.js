import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';

import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import Input from '../components/Input.component';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[TextStyles.h2, styles.heading]}>Create New Task</Text>

      <Input label="Task's Name" placeholder="e.g. Do chores" />

      <Input label="Task's Description" isMultilines />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: Sizes.mediumLargeH,
    paddingHorizontal: Sizes.mediumLarge,
    backgroundColor: Colors.secondaryLighter,
  },
  heading: {
    textAlign: 'center',
    marginBottom: Sizes.massiveH,
  },
});
