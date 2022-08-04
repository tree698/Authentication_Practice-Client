import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/auth/signupSlice';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      username,
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      alert('Password is not same!');
    } else {
      dispatch(signup(dataToSubmit))
        .then((response) => {
          if (response.payload.loginSuccess) {
            navigate('/login');
          }
        })
        .catch((error) => alert(error));
    }
  };

  const onUsernameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
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
        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
