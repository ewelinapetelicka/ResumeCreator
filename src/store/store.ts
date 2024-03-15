import { configureStore } from '@reduxjs/toolkit';
import { templatesSlice } from './template/templates.slice';

export const store = configureStore({
  reducer: {
    templates: templatesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
