import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Alerts } from "../layout/Alert";

export const SignupOrg = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { signup, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
			props.history.push('/user');
		}

    if (error === "User already exists") {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
    accountType: "candidate"    
  });

  const { email, password, password2, accountType } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();

    if (email === "" || password === "") {
      setAlert("Please enter required fields", 'danger');
    } else if (password !== password2) {
      setAlert("Password do not match", 'danger');
    } else {
      signup({
        accountType,
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
              Sign Up - Organization
            </h2>
            <p>Already have an account? <Link to="/signin" >Sign In</Link></p>
            <p>Not an Organization? <a href="signup-can.html">Sign Up as a Candidate</a></p>
            <Alerts />
          </div>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' placeholder='Username' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' placeholder='Email' value={email}  onChange={onChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' placeholder='Password' value={password} onChange={onChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='password2'>Confirm Password</label>
              <input type='password' name='password2' placeholder='Confirm Password'  value={password2}  onChange={onChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='first-name'>First Name</label>
              <input type='text' name='first-name' placeholder='First Name' />
            </div>
            <div className='form-group'>
              <label htmlFor='last-name'>Last Name</label>
              <input type='text' name='last-name' placeholder='Last Name' />
            </div>
            <div className='form-group'>
              <label htmlFor='organization-name'>Organization Name</label>
              <input type='text' name='organization-name' placeholder='Organization Name' />
            </div>
            <div className='form-group form-group-select'>
              <label htmlFor='organization-type'>Organization Type</label>
              <select name="organization-type" id="organization-type">
                <option value="company">Company</option>
                <option value="non-profit">Non-Profit</option>
                <option value="charity">Charity</option>
                <option value="institution">Institution</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className='form-group form-group-checkbox form-group-checkbox--signup'>
              <label className='form-group checkbox'> I agree to the <a href="/">Terms of Service</a>
                <input type='checkbox' name='agree-service' />
                <span className="checkmark"></span>
              </label>
            </div>


            <div className="sign-in--btn-wrap">
              <input type='submit' value='Sign Up' className='btn btn-sign' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
