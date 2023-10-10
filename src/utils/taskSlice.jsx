import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    moveTaskToColumn: (state, action) => {
      const { taskId, newColumn } = action.payload;
      const task = state.find((t) => t.id === taskId);
      if (task) {
        task.column = newColumn;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },

    editTask: (state, action) => {
      const editedTask = action.payload;
      const { id, title, date } = editedTask;
      return state.map((task) =>
        task.id === id ? { ...task, title: title, date: date } : task
      );
    },
  },
});

export const { addTask, moveTaskToColumn, removeTask, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;
