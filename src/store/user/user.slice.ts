import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../model/user.model';

interface UserSlice {
  user: User;
  isLogged: boolean;
}

const initialState: UserSlice = {
  user: {} as User,
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectIsUserLogged = (state: RootState) => state.user.isLogged;
