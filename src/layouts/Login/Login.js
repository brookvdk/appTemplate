import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as loginActions from '../../actions/Login';

const Login = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const value = login.loginVariable === 'Clicked' ? 'Not Clicked' : 'Clicked';
    dispatch(loginActions.loginChange(value));
  };

  return (
    <>
      <p>Login Layout</p>
      <button type="button" onClick={handleButtonClick}>Click here!</button>
      <p>{login.loginVariable}</p>
    </>
  );
};

export default Login;
