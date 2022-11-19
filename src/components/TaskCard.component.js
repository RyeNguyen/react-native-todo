import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteTask, completeTask } from '../features/todo/todoSlice';

import IconDelete from '../icons/IconDelete.icon';
import IconTick from '../icons/IconTick.icon';

const TaskCard = ({ task }) => {
  const completedTasks = useAppSelector(state => state.todo.completedTasks);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const { id, name, description, priority, color, backgroundColor } = task;

  return (
    <TouchableOpacity
      style={[LayoutStyles.layoutShadow, styles.container]}
      onPress={() => {
        if (completedTasks.includes(task)) {
          return;
        }
        navigation.navigate('TaskDetail', { taskId: id });
      }}>
      <Text numberOfLines={2} style={[TextStyles.textMain, styles.title]}>
        {name}
      </Text>

      <Text numberOfLines={3} style={TextStyles.textSmall}>
        {description}
      </Text>

      <View style={[styles.label, { backgroundColor: backgroundColor }]}>
        <Text style={[TextStyles.textSmall, { color: color }]}>
          Priority: {priority}
        </Text>
      </View>

      {completedTasks.includes(task) ? null : (
        <TouchableOpacity
          onPress={() => dispatch(completeTask(id))}
          style={[
            LayoutStyles.layoutShadow,
            styles.cardButton,
            styles.cardButton1,
          ]}>
          <Text
            style={[
              TextStyles.textSmall,
              TextStyles.textWhite,
              styles.cardButtonText,
            ]}>
            Done
          </Text>
          <IconTick />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => dispatch(deleteTask(id))}
        style={[
          LayoutStyles.layoutShadow,
          styles.cardButton,
          styles.cardButton2,
        ]}>
        <IconDelete />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.mediumLarge,
    paddingHorizontal: Sizes.mediumLarge,
    paddingVertical: Sizes.mediumLarge,
    paddingTop: Sizes.hugerH,
    backgroundColor: Colors.secondary,
    marginBottom: Sizes.massiveH,
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: Sizes.mediumLargeH,
  },
  cardButton: {
    height: Sizes.huger + Sizes.mediumSmall,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    top: -Sizes.largerH,
    elevation: Sizes.smaller,
  },
  cardButton1: {
    paddingHorizontal: Sizes.mediumSmall,
    right: Sizes.huger + Sizes.medium,
    backgroundColor: Colors.blue,
    flexDirection: 'row',
  },
  cardButton2: {
    width: Sizes.huger + Sizes.mediumSmall,
    right: -Sizes.mediumSmall,
    backgroundColor: Colors.red,
  },
  cardButtonText: {
    marginRight: Sizes.smallest,
  },
  label: {
    paddingVertical: Sizes.smallH,
    paddingHorizontal: Sizes.mediumLarge,
    marginTop: Sizes.largerH,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    justifyContent: 'center',
    borderRadius: Sizes.mediumLarge,
  },
});
