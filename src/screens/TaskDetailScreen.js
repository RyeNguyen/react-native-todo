import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getTaskById, updateTask } from '../features/todo/todoSlice';

import IconArrowLeft from '../icons/IconArrowLeft.icon';

const TaskDetailScreen = ({ navigation, route }) => {
  const { taskId } = route.params;
  const currentTask = useAppSelector(state => state.todo.currentTask);
  const prioritiesList = useAppSelector(state => state.todo.categories);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(currentTask.name);
  const [description, setDescription] = useState(currentTask.description);
  const [priority, setPriority] = useState(currentTask.priority);
  const [showSave, setShowSave] = useState(false);

  useEffect(() => {
    setTitle(currentTask.name);
    setDescription(currentTask.description);
    setPriority(currentTask.priority);
    dispatch(getTaskById(taskId));
  }, [
    currentTask.description,
    currentTask.name,
    currentTask.priority,
    dispatch,
    taskId,
  ]);

  useEffect(() => {
    if (
      currentTask.name !== title ||
      currentTask.description !== description ||
      currentTask.priority !== priority
    ) {
      setShowSave(true);
    } else {
      setShowSave(false);
    }
  }, [title, description, priority]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetFields();
      };
    }, []),
  );

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setShowSave(false);
  };

  const handleUpdate = () => {
    dispatch(
      updateTask({
        ...currentTask,
        name: title,
        description: description,
        priority: priority,
      }),
    );
    navigation.goBack();
  };

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

      {showSave ? (
        <TouchableOpacity
          onPress={handleUpdate}
          style={[LayoutStyles.layoutCenter, styles.saveButton]}>
          <Text style={[TextStyles.textMain, TextStyles.textWhite]}>Save</Text>
        </TouchableOpacity>
      ) : null}

      <ScrollView>
        <TextInput
          multiline
          defaultValue={title}
          onChangeText={newText => setTitle(newText)}
          style={[TextStyles.h1, styles.heading]}
        />

        <View style={styles.labelGroup}>
          {/*<Text style={TextStyles.textSmall}>Priority</Text>*/}
          {prioritiesList.map(pri => (
            <TouchableOpacity
              key={pri.id}
              onPress={() => setPriority(pri.name)}
              style={[
                styles.label,
                LayoutStyles.layoutShadow,
                pri.name === priority ? styles.labelActive : '',
              ]}>
              <Text style={[TextStyles.textMain, { color: pri.color1 }]}>
                {pri.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          multiline
          onChangeText={newText => setDescription(newText)}
          style={[TextStyles.textMain, styles.description]}
          defaultValue={description}
        />
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
    paddingTop: Sizes.massiveH * 3,
    paddingBottom: Sizes.largeH,
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
  saveButton: {
    backgroundColor: Colors.primary,
    borderRadius: Sizes.mediumLarge,
    paddingVertical: Sizes.mediumLargeH,
    paddingHorizontal: Sizes.huger,
    position: 'absolute',
    top: Sizes.hugerH + Sizes.smallestH,
    right: Sizes.huge,
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
