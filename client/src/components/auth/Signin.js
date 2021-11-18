import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Alerts } from "../layout/Alert";

export const Signin = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { signin, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
			props.history.push('/user');
		}

    if (error === "Invalid Credentials!") {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    if (email === "" || password === "") {
      setAlert("Please enter required fields", 'danger');
    } else {
      signin({
        email,
        password
      })
    }
  }
  return (
    <section className="sign-up-main">
    <div className="sign-up-main--wrap">
      <div className='form-container'>
        <div className="sign-up-main--head">
          <h2>
            Sign In
          </h2>
          <p>Don't have an account? <Link to="/signup-org">Sign Up</Link></p>
          <Alerts />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' value={email} onChange={onChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' value={password} onChange={onChange} />
          </div>
          <div className="sign-in--btn-wrap">
            <input type='submit' value='Sign In' className='btn btn-sign' />
            <a href="/">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}
