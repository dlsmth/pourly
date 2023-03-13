import { createSlice } from '@reduxjs/toolkit';

const stageSlice = createSlice({
  name: 'stage',
  initialState: { stage: 0},
  reducers: {
    selectStage(state, action) {
      state.stage = action.payload
    },
  }
});

export const stageActions = stageSlice.actions;
export default stageSlice;