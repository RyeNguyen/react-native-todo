import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import { useAppSelector } from '../app/hooks';

import TaskCard from '../components/TaskCard.component';

const TaskListScreen = () => {
  const remaining = useAppSelector(state => state.todo.tasks);
  const completed = useAppSelector(state => state.todo.completedTasks);

  const renderTask = item => {
    return <TaskCard key={item.id} task={item} />;
  };

  return (
    <ScrollView style={[LayoutStyles.layoutScreen, styles.screen]}>
      <View style={styles.listWrapper}>
        <Text style={[TextStyles.h2, styles.heading]}>Tasks in Progress</Text>
        {remaining.map(task => renderTask(task))}
      </View>

      <View style={styles.listWrapper}>
        <Text style={[TextStyles.h2, styles.heading]}>Completed Tasks</Text>
        {completed.map(task => renderTask(task))}
      </View>
    </ScrollView>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: Colors.secondaryLighter,
    paddingBottom: Sizes.hugerH,
    overflow: 'visible',
  },
  heading: {
    marginBottom: Sizes.massiveH,
  },
  listWrapper: {
    top: -3,
    borderTopWidth: 2,
    borderColor: Colors.primaryLighter,
    borderStyle: 'dashed',
    paddingTop: Sizes.hugeH,
    paddingHorizontal: Sizes.huge,
    marginBottom: Sizes.hugerH,
  },
});
