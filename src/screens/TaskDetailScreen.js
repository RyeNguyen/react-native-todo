import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getTaskById } from '../features/todo/todoSlice';

import IconArrowLeft from '../icons/IconArrowLeft.icon';

const TaskDetailScreen = ({ navigation, route }) => {
  const { taskId } = route.params;
  const currentTask = useAppSelector(state => state.todo.currentTask);
  const prioritiesList = useAppSelector(state => state.todo.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTaskById(taskId));
  }, [dispatch, taskId]);

  if (!taskId) {
    return null;
  }

  return (
    <View style={[LayoutStyles.layoutScreen, styles.screen]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, LayoutStyles.layoutShadow]}>
        <IconArrowLeft />
      </TouchableOpacity>

      <ScrollView>
        <Text style={[TextStyles.h1, styles.heading]}>{currentTask.name}</Text>

        <View style={styles.labelGroup}>
          {/*<Text style={TextStyles.textSmall}>Priority</Text>*/}
          {prioritiesList.map(pri => (
            <View
              key={pri.id}
              style={[
                styles.label,
                LayoutStyles.layoutShadow,
                currentTask.priority === pri.name ? styles.labelActive : null,
              ]}>
              <Text style={[TextStyles.textMain, { color: pri.color1 }]}>
                {pri.name}
              </Text>
            </View>
          ))}
        </View>

        <Text style={[TextStyles.textMain, styles.description]}>
          {currentTask.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: Colors.secondaryLighter,
    paddingHorizontal: Sizes.huge,
    paddingVertical: Sizes.massiveH * 3,
  },
  backButton: {
    top: Sizes.huge,
    left: Sizes.huge,
    borderRadius: 100,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizes.mediumLarge,
  },
  heading: {
    marginBottom: Sizes.hugeH,
  },
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.massiveH,
  },
  label: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizes.mediumLarge,
    borderTopLeftRadius: Sizes.mediumLarge,
    borderBottomRightRadius: Sizes.mediumLarge,
    marginRight: Sizes.mediumLarge,
    backgroundColor: Colors.secondary,
  },
  labelActive: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  description: {
    lineHeight: 25,
  },
});
