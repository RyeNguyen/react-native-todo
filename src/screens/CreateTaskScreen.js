import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

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
  const [priority, setPriority] = useState('Low');
  const dispatch = useAppDispatch();

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
            style={[
              LayoutStyles.layoutCenter,
              styles.priorityContainer,
              { backgroundColor: item.color2 },
            ]}>
            <Text style={[TextStyles.textSmall, { color: item.color1 }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={[LayoutStyles.layoutCenter, styles.button]}>
          <Text
            style={[TextStyles.textMain, TextStyles.textWhite]}
            onPress={() =>
              dispatch(
                createTask({
                  id: Math.random() * 1000,
                  name: title,
                  description: description,
                  priority: priority,
                }),
              )
            }>
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
    borderBottomRightRadius: Sizes.mediumLarge,
  },
  footer: {
    marginTop: Sizes.massiveH * 2,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Sizes.mediumLarge,
    borderRadius: Sizes.mediumLarge,
  },
});
