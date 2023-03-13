import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startTime: 0,
  bloomStartTime: 0,
  bloomEndTime: 0,
  endTime: 0,
  timeDone: false,
  brewTime: 0
};

const brewtimeSlice = createSlice({
  name: 'brewtime',
  initialState: initialState,
  reducers: {
    setStartTime(state, action) {
      state.startTime = Date.now();
    },
    setBloomStartTime(state, action) {
      state.bloomStartTime = Date.now();
    },
    setBloomEndTime(state, action) {
      state.bloomEndTime = Date.now();
    },
    setEndTime(state, action) {
      state.endTime = Date.now();
    },
    setTimeDone(state, action) {
      state.timeDone = action.payload;
      state.brewTime = state.endTime - state.startTime;
    },
    calcBrewTime(state, action) {
      state.brewTime = state.endTime - state.startTime;
    }
  }
});

export const brewtimeActions = brewtimeSlice.actions;
export default brewtimeSlice;