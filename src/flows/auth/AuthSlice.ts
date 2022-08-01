import { createSlice } from '@reduxjs/toolkit';
import { IAuthLogin } from './IAuthLogin';

const initialState: IAuthLogin = {
  auth: false,
  loading: false,
  user: {},
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.auth = true;
    },
  },
  extraReducers: {},
});

export const { login } = AuthSlice.actions;

export const AuthReducer = AuthSlice.reducer;
