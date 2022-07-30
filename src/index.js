import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { applyMiddleware, configStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import rootReducer from './_reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  reduxThunk
)(configStore);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>
);
