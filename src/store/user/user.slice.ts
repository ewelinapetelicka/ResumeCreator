import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../model/user.model';

interface UserSlice {
  user: User;
  accessToken: string;
}

const initialState: UserSlice = {
  user: {} as User,
  accessToken: localStorage.getItem('accessToken') || '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    },
    logOut: (state) => {
      state.accessToken = '';
      localStorage.removeItem('accessToken');
    },
  },
});

export const selectIsUserLogged = (state: RootState) =>
  !!state.user.accessToken;
export const selectAccessToken = (state: RootState) => state.user.accessToken;

export const { logIn, logOut } = userSlice.actions;
