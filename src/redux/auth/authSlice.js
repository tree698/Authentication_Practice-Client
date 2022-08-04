import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    login: {
      reducer: (state) => {
        return { ...state };
      },
      prepare: (dataToSubmit) => {
        const request = axios
          .post('http://localhost:8080/auth/login', dataToSubmit)
          .then((response) => response.data);
        return { payload: request };
      },
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
