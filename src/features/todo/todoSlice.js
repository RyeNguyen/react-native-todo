import { createSlice } from '@reduxjs/toolkit';

import TaskListData from '../../data/TaskList.data';

const initialState = {
  tasks: TaskListData,
};

const todoSlice = createSlice({
  name: 'ToDo',
  initialState,
  reducers: {
    createTask(state, action) {
      state.tasks.push(action.payload);
    },
  },
});

export const { createTask } = todoSlice.actions;
export default todoSlice.reducer;
