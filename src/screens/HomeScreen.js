import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';

import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import Input from '../components/Input.component';
import TaskCard from '../components/TaskCard.component';
import HomeHeader from "../components/HomeHeader.component";

import TaskListData from '../data/TaskList.data';
import UserData from "../data/User.data";

import IconSearch from "../icons/IconSearch.icon";

const HomeScreen = () => {
  return (
    <ScrollView style={LayoutStyles.layoutScreen}>
      <View style={styles.header}>
        <HomeHeader data={UserData}/>

        <Input preIcon={<IconSearch/>} placeholder='Search Task'/>
      </View>

      <View style={styles.taskContainer}>
        <Text style={TextStyles.textMain}>My Tasks</Text>
        {/* <TaskList data={TaskListData} /> */}
        {TaskListData.map((task, index) => {
          return <TaskCard key={index} name={task.name} />;
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: Sizes.mediumLarge,
  },
  taskContainer: {
    height: '100%',
    backgroundColor: Colors.secondaryLighter,
    marginTop: Sizes.massiveH,
    borderTopLeftRadius: Sizes.massive * 2,
    paddingVertical: Sizes.massiveH,
    paddingHorizontal: Sizes.mediumLarge,
  },
});
