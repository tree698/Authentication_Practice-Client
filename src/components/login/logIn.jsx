import React, { useState } from 'react';
import { login, logout } from '../../../redux/auth/authSlice';
import { useDispatch } from 'react-redux';

const LogIn = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Todo: Chan
    // const body = {
    //   username,
    //   password,
    // };
    // dispatch(login(body));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Username</label>
        <input type="text" value={username} onChange={onUsernameHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LogIn;
