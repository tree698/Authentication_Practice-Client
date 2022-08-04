import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
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

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
