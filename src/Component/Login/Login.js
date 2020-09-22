import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from "react-router-dom";
import facebook from '../../Icon/fb.png'
import google from '../../Icon/google.png'
import "firebase/auth";
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn,  handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../ManageLogin/ManageLogin';
import { Button } from 'react-bootstrap';


const Login = () => {


  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: ''

  });

  initializeLoginFramework();

  const auth = useContext(UserContext);
  const {setLoggedInUser} = auth;
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }



  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 8;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          // console.log(res);
          handleResponse(res, true);
        })
    }

    if (newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          // console.log(res);
          handleResponse(res, true);
        })
    }

  }



  return (
    <div className='login'>

      <form style={{ margin: '40px', padding:'40px' }}>
        
        <h1 > {!newUser ?  'Create an account' : 'Log In' }</h1>
        {
          !newUser && <input type='text' name='name' onBlur={handleBlur} placeholder=' Name' className='long' />
        }
        <br />
        <br />
        <input type='email' name='email' onBlur={handleBlur} placeholder='email' className='long' required />
        <br />
        <br />
        <input type='password' name='password' onBlur={handleBlur} placeholder='password must be 8 character letter and number' className='long' required />

        <br />
        <br />
        {!newUser && <input type='password' name='password' onBlur={handleBlur} placeholder='confirm password' className='long' />
        }                <br />
        <br />
        <Button variant='danger' onClick={handleSubmit} className='long'>Submit </Button>
        <br />
        <br />
        <h6 onClick={() => setNewUser(!newUser)} style={{cursor:'pointer'}}><span>Already have an account?  login </span>   </h6>

      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      { user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}



      <div className="col">

        <Link to='' className="fb btn" onClick={fbSignIn}>
          <img src={facebook} alt="" style={{ height: '25px', width: '30px' }} /> Login with Facebook
                </Link>

        <Link to='' className="google btn" onClick={handleGoogleSignIn}>
          <img src={google} alt="" style={{ height: '25px', width: '30px' }} onClick={googleSignIn} /> Login with Google+
                </Link>
      </div>

      



    </div>
  );
};

export default Login;