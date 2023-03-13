import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lessonNumber: 0,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: initialState,
  reducers: {
    selectLesson(state, action) {
      state.lessonNumber = action.payload;
    },
    addLesson(state) {
      state.lessonNumber++;
    }
  }
});

export const lessonsActions = lessonsSlice.actions;
export default lessonsSlice;