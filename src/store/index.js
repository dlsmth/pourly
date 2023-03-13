import { configureStore } from '@reduxjs/toolkit';
import modeSlice from './mode-slice';
import stageSlice from './stage-slice';
import amountSlice from './amount-slice';
import brewtimeSlice from './brewtime-slice';
import gameplaySlice from './gameplay-slice';
import lessonsSlice from './lessons-slice';

const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    stage: stageSlice.reducer,
    amount: amountSlice.reducer,
    brewtime: brewtimeSlice.reducer,
    gameplay: gameplaySlice.reducer,
    lessons: lessonsSlice.reducer
  }
});

export default store;