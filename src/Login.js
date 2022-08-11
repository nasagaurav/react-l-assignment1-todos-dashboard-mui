import React, { useRef } from 'react';
import { loginService } from './services';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const r1 = useRef(); //email
  const r2 = useRef(); //password

  const hs = () => {
    // need a login service
    // can send email and password
    const data = {
      email: r1.current.value,
      password: r2.current.value,
    };

    loginService(data).then((d) => {
      if (d.status) {
        toast('login success');

        navigate('/Login');
        dispatch({ type: 'login', payload: d.token });
        dispatch({ type: 'setusername', payload: data.email });
      } else {
        toast('failed to login');
      }
    });
  };
  return (
    <div className="form">
      <h3>Login Form </h3>
      <input ref={r1} placeholder="email" />
      <input ref={r2} placeholder="password" />
      <button onClick={hs}>Login</button>
    </div>
  );
}
export default Login;
