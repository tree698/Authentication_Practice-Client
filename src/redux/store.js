import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [ReduxThunk, ReduxPromise],
});
