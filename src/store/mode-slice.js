import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: { mode: 0},
  reducers: {
    selectMode(state, action) {
      state.mode = action.payload
    },
  }
});

export const modeActions = modeSlice.actions;
export default modeSlice;