import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coffee: 0,
  grind: 0,
  water: 0
};

const amountSlice = createSlice({
  name: 'amount',
  initialState: initialState,
  reducers: {
    resetAmounts(state) {
      state.coffee = 0;
      state.grind = 0;
      state.water = 0;
    },
    addCoffee(state, action) {
      if (state.coffee === 36) { 
        return;
      } else {
        state.coffee = state.coffee + action.payload;
      }
    },
    removeCoffee(state, action) {
      if (state.coffee === 0) {
        return;
      } else {
        state.coffee = state.coffee - action.payload;
      }
      
    },
    grindSetting(state, action) {
      state.grind = action.payload;
    },
    addWater(state, action) {
      state.water = state.water + action.payload;
    }
  }
});

export const amountActions = amountSlice.actions;
export default amountSlice;