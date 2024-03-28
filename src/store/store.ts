import { configureStore } from '@reduxjs/toolkit';
import { templatesSlice } from './template/templates.slice';
import { resumesSlice } from './resume/resumes.slice';
import { userSlice } from './user/user.slice';

export const store = configureStore({
  reducer: {
    resumes: resumesSlice.reducer,
    templates: templatesSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
