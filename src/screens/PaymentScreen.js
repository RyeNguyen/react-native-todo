import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';

import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import Input from '../components/Input.component';

import Priorities from "../data/Priorities.data";

const PaymentScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={[TextStyles.h2, styles.heading]}>Create New Task</Text>

      <Input label="Add Task's Name" placeholder="e.g. Do chores" />

      <Input label="Add Task's Description" isMultilines numberOfLines={7} />

      <Text style={TextStyles.textMain}>Choose Priority</Text>
      <View style={[LayoutStyles.layoutStretch, styles.priorityList]}>
        {Priorities.map(item => <TouchableOpacity
          key={item.id}
          style={[LayoutStyles.layoutCenter, styles.priorityContainer, {backgroundColor: item.color2}]}
        >
          <Text style={[TextStyles.textSmall, {color: item.color1}]}>{item.name}</Text>
        </TouchableOpacity>)}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[LayoutStyles.layoutCenter, styles.button]}>
          <Text style={[TextStyles.textMain, TextStyles.textWhite]}>Create Task</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  priorityList: {
    marginTop: Sizes.mediumH
  },
  priorityContainer: {
    width: '30%',
    paddingVertical: Sizes.smaller,
    borderTopLeftRadius: Sizes.mediumLarge,
    borderBottomRightRadius: Sizes.mediumLarge
  },
  footer: {
    marginTop: Sizes.massiveH * 2
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Sizes.mediumLarge,
    borderRadius: Sizes.mediumLarge
  }
});
