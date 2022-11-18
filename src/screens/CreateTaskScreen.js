import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { useAppDispatch } from '../app/hooks';
import { createTask } from '../features/todo/todoSlice';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';
import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

import Input from '../components/Input.component';

import Priorities from '../data/Priorities.data';

const CreateTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('!');
  const [errMsg, setErrMsg] = useState('');
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      return () => {
        resetFields();
        setErrMsg('');
      };
    }, []),
  );

  const validateInput = () => {
    if (!title) {
      setErrMsg('Please fill out the title of your task!');
      return false;
    }
    setErrMsg('');
    return true;
  };

  const resetFields = () => {
    setTitle('');
    setDescription('');
    setPriority('!');
  };

  const handleCreateTask = () => {
    if (validateInput()) {
      dispatch(
        createTask({
          id: Math.floor(Math.random() * 100000),
          name: title,
          description: description,
          priority: priority,
        }),
      );
      resetFields();
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={[TextStyles.h2, styles.heading]}>Create New Task</Text>

      <Input
        label="Add Task's Name"
        placeholder="e.g. Do chores"
        value={title}
        handleChange={newText => setTitle(newText)}
      />

      <Input
        label="Add Task's Description"
        isMultilines
        numberOfLines={7}
        value={description}
        handleChange={newText => setDescription(newText)}
      />

      <Text style={TextStyles.textMain}>Choose Priority</Text>
      <View style={[LayoutStyles.layoutStretch, styles.priorityList]}>
        {Priorities.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setPriority(item.name)}
            style={[
              LayoutStyles.layoutCenter,
              LayoutStyles.layoutShadow,
              styles.priorityContainer,
              priority === item.name ? styles.priorityActive : '',
            ]}>
            <Text style={[TextStyles.textSmall, { color: item.color1 }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        {errMsg ? (
          <Text style={[TextStyles.textMain, styles.error]}>{errMsg}</Text>
        ) : null}

        <TouchableOpacity
          style={[LayoutStyles.layoutCenter, styles.button]}
          onPress={handleCreateTask}>
          <Text style={[TextStyles.textMain, TextStyles.textWhite]}>
            Create Task
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingVertical: Sizes.mediumLargeH,
    paddingHorizontal: Sizes.mediumLarge,
    backgroundColor: Colors.secondaryLighter,
    overflow: 'visible',
  },
  heading: {
    textAlign: 'center',
    marginBottom: Sizes.massiveH,
  },
  priorityList: {
    marginTop: Sizes.mediumH,
  },
  priorityContainer: {
    width: '30%',
    paddingVertical: Sizes.smaller,
    borderTopLeftRadius: Sizes.mediumLarge,
    backgroundColor: Colors.secondary,
    borderBottomRightRadius: Sizes.mediumLarge,
  },
  priorityActive: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  footer: {
    marginTop: Sizes.massiveH * 2,
  },
  button: {
    backgroundColor: Colors.primaryLighter,
    paddingVertical: Sizes.mediumLarge,
    borderRadius: Sizes.mediumLarge,
  },
  error: {
    color: Colors.red,
    textAlign: 'center',
    marginBottom: Sizes.mediumLarge,
  },
});
