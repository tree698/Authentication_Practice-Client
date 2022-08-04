import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const signupSlice = createSlice({
  name: 'signup',
  initialState: {},
  reducers: {
    signup: {
      reducer: (state) => {
        return { ...state };
      },
      prepare: (dataToSubmit) => {
        const request = axios
          .post('http://localhost:8080/auth/signup', dataToSubmit)
          .then((response) => response.data);
        return { payload: request };
      },
    },
  },
});

export const { signup } = signupSlice.actions;
export default signupSlice.reducer;
