import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/loginSlice';
import signupReducer from './auth/signupSlice';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

export default configureStore({
  reducer: {
    login: authReducer,
    signup: signupReducer,
  },
  middleware: [ReduxThunk, ReduxPromise],
});
