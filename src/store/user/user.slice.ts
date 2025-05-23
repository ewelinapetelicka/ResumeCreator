import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../model/user.model';
import { PersonalData } from '../../model/personal-data.model';

const ACCESS_TOKEN_KEY = 'accessToken';
const USER_KEY = 'user';

interface UserSlice {
  user: User;
  accessToken: string;
}

const initialState: UserSlice = {
  user: localStorage.getItem(USER_KEY)
    ? JSON.parse(localStorage.getItem(USER_KEY)!)
    : ({} as User),
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem(ACCESS_TOKEN_KEY, action.payload);
    },
    logOut: (state) => {
      state.accessToken = '';
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    },
    setUser: (state, action: PayloadAction<User>) => {
      (action.payload as any)['password'] = undefined; // remove from api
      state.user = action.payload;
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
    },
    setUserPersonalData: (state, action: PayloadAction<PersonalData>) => {
      state.user.personalData = action.payload;
      localStorage.setItem(
        USER_KEY,
        JSON.stringify({
          ...state.user,
          personalData: action.payload,
        }),
      );
    },
  },
});

export const selectIsUserLogged = (state: RootState) =>
  !!state.user.accessToken;
export const selectUserId = (state: RootState) => state.user.user.id;
export const selectAccessToken = (state: RootState) => state.user.accessToken;
export const selectUser = (state: RootState) => state.user.user;
export const { logIn, logOut, setUser, setUserPersonalData } =
  userSlice.actions;
