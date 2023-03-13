import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coffeeAdded: false,
  coffeeGround: false,
  waterPoured: false,
  coffeeDone: false
};

const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState: initialState,
  reducers: {
    resetPlayStates(state) {
      state.coffeeAdded = false;
      state.coffeeGround = false;
      state.waterPoured = false;
      state.coffeeDone = false;
    },
    coffeeAdded(state, action) {
      state.coffeeAdded = action.payload;
    },
    coffeeGround(state, action) {
      state.coffeeGround = action.payload;
    },
    waterPoured(state, action) {
      state.waterPoured = action.payload;
    },
    coffeeDone(state, action) {
      state.coffeeDone = action.payload;
    }
  }
});

export const gameplayActions = gameplaySlice.actions;
export default gameplaySlice;