import { createSlice } from '@reduxjs/toolkit';

import TaskListData from '../../data/TaskList.data';
import Priorities from '../../data/Priorities.data';

const getPriorityName = taskPriority => {
  for (let i = 0; i < Priorities.length; i++) {
    if (Priorities[i].id === taskPriority) {
      return Priorities[i].name;
    }
  }
  return taskPriority;
};

const getPriorityColor = (taskPriority, isBg) => {
  for (let i = 0; i < Priorities.length; i++) {
    if (
      Priorities[i].id === taskPriority ||
      Priorities[i].name === taskPriority
    ) {
      return isBg ? Priorities[i].color2 : Priorities[i].color1;
    }
  }
};

const getFullTasks = data => {
  return data.map(task => ({
    ...task,
    priority: getPriorityName(task.priority),
    color: getPriorityColor(task.priority, false),
    backgroundColor: getPriorityColor(task.priority, true),
  }));
};

const initialState = {
  tasks: TaskListData,
  currentTask: {},
  categories: Priorities,
};

const todoSlice = createSlice({
  name: 'ToDo',
  initialState,
  reducers: {
    createTask(state, action) {
      state.tasks.unshift(action.payload);
      state.tasks = getFullTasks(state.tasks);
      console.log('Full tasks', state.tasks);
    },
    getTaskById(state, action) {
      state.tasks.forEach(task => {
        if (task.id === action.payload) {
          state.currentTask = task;
        }
      });
    },
    getTasks(state) {
      state.tasks = getFullTasks(state.tasks);
      console.log('Full tasks', state.tasks);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { createTask, getTaskById, getTasks, deleteTask } =
  todoSlice.actions;
export default todoSlice.reducer;
