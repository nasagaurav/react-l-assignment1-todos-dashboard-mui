import React, { useRef } from 'react';
import { signupService } from './services';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
  const navigate = useNavigate();
  const r1 = useRef(); //name
  const r2 = useRef(); //email
  const r3 = useRef(); //password

  const hs = () => {
    // need a signup service
    // signupService
    // name,email,password
    const data = {
      name: r1.current.value,
      email: r2.current.value,
      password: r3.current.value,
    };
    signupService(data).then((d) => {
      console.log(d);
      if (d.status) {
        toast('signup successfull');
        navigate('/Login');
      } else {
        toast('signup failed');
      }
    });
  };

  return (
    <div className="form">
      <h3>Signup</h3>
      <input ref={r1} placeholder="name" />
      <input ref={r2} placeholder="email" />
      <input ref={r3} placeholder="password" />
      <button onClick={hs}>signup</button>
    </div>
  );
}
export default Signup;
