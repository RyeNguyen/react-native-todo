import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import { useAppSelector } from '../app/hooks';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.card}>
      <Text>{task.name}</Text>
    </View>
  );
};

const TaskListScreen = () => {
  const data = useAppSelector(state => state.todo.tasks);

  const renderTask = ({ item }) => {
    return <TaskCard task={item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={task => task.id}
      renderItem={renderTask}
    />
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({});
