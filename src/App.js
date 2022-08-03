import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/landing/landing';
import LogIn from './components/login/logIn';
import SignUp from './components/signup/signUp';
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
