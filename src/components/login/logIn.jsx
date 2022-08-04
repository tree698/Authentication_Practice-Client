import React, { useState } from 'react';
import { login } from '../../redux/auth/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogIn = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    const body = {
      username,
      password,
    };

    dispatch(login(body))
      .then((response) => {
        if (response.payload.loginSuccess) {
          navigate('/');
        }
      })
      .catch((error) => {
        alert('Invalid username or password!');
      });

    setUsername('');
    setPassword('');
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
