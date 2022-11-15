import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import TaskCard from './TaskCard.component';

const TaskList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={task => task.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return <TaskCard name={item.name} />;
      }}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({});
