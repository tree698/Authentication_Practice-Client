import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    login: (_, action, dataToSubmit) => {
      // const request = axios
      //   .post('/auth/login', dataToSubmit)
      //   .then((response) => response.data);
      // action.payload = request;
    },
    logout: (state) => {},
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
