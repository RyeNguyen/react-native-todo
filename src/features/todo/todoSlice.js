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
  completedTasks: [],
};

const todoSlice = createSlice({
  name: 'ToDo',
  initialState,
  reducers: {
    createTask(state, action) {
      state.tasks.unshift(action.payload);
      state.tasks = getFullTasks(state.tasks);
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
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask(state, action) {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task = action.payload;
          return task;
        }
        return task;
      });
      state.tasks = getFullTasks(state.tasks);
    },
    completeTask(state, action) {
      state.tasks = state.tasks.filter(task => {
        if (task.id === action.payload) {
          state.completedTasks.unshift(task);
        }
        return task.id !== action.payload;
      });
      console.log('completed: ', state.completedTasks);
    },
  },
});

export const {
  createTask,
  getTaskById,
  getTasks,
  deleteTask,
  updateTask,
  completeTask,
  filterTask,
} = todoSlice.actions;
export default todoSlice.reducer;
