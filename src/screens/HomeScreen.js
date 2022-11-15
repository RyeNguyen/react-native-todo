import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';

import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import Input from '../components/Input.component';
import TaskList from '../components/TaskList.component';
import TaskCard from '../components/TaskCard.component';

import TaskListData from '../data/TaskList.data';

const HomeScreen = () => {
  return (
    <ScrollView style={LayoutStyles.layoutScreen}>
      <View style={styles.header}>
        <View style={[LayoutStyles.layoutStretch, styles.headerTop]}>
          <View>
            <Text style={[TextStyles.h2, TextStyles.textWhite]}>Welcome Minh</Text>
            <Text style={[TextStyles.textMain, TextStyles.textWhite, styles.welcome]}>
              Have a great day!
            </Text>
          </View>

          <Image style={styles.avatar} />
        </View>

        <Input />
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
  welcome: {
    marginTop: Sizes.smallestH,
  },
  header: {
    marginHorizontal: Sizes.mediumLarge
  },
  headerTop: {
    marginVertical: Sizes.mediumLargeH
  },
  avatar: {
    width: Sizes.massive,
    height: Sizes.massive,
    backgroundColor: 'tomato',
    borderRadius: 1000,
  },
  taskContainer: {
    height: '100%',
    backgroundColor: Colors.secondaryLighter,
    marginTop: Sizes.massiveH,
    borderTopLeftRadius: Sizes.massive * 2,
    paddingVertical: Sizes.massiveH,
    paddingHorizontal: Sizes.mediumLarge
  },
});
