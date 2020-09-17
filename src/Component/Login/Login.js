import React, { useContext, useState } from 'react';
import './Login.css'
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from "react-router-dom";
import facebook from '../../Icon/fb.png'
import google from '../../Icon/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseauth';
import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn,createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../ManageLogin/ManageLogin';


const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: ''
      
    });
  
    initializeLoginFramework();
  
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
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
  
    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
  
    const handleResponse = (res, redirect) =>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 8;
        const passwordHasNumber =  /\d{1}/.test(e.target.value);
        isFieldValid = isPasswordValid && passwordHasNumber;
      }
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          console.log(res);
          // handleResponse(res, true);
        })
      }
  
      if(newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res);
          // handleResponse(res, true);
        })
      }
      
    }

    return (
        <div className='login'>

            <form  style={{ margin: '40px' }}>
                <h1>Create an account</h1>
                <input type='text' name='name' onBlur={handleBlur} placeholder=' Name' className='long' />
                <br />
                {/* <br />
                <input type='text' name='last' onBlur={handleBlur} placeholder='Last Name' className='long' />
                <br /> */}
                <br />
                <input type='email' name='email' onBlur={handleBlur} placeholder='email' className='long' required />
                <br />
                <br />
                <input type='password' name='password' onBlur={handleBlur} placeholder='password' className='long' required/>
                <br />
                <br />
                <input type='password' name='password' onBlur={handleBlur} placeholder='confirm password' className='long' />
                <br />
                <br />
                <Link to="/login"><input type="submit"  onClick={handleSubmit} className='long' /> </Link>
                <br />
                <br />
                <h6>Already have an account? <a href="url">login </a> </h6>
                
            </form>
            <p style={{color: 'red'}}>{user.error}</p>
            { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}



            <div class="col">
                <a href="#" class="fb btn" onClick={handleFbSignIn}>
                    <img src={facebook} alt="" style={{ height: '25px', width: '30px' }} /> Login with Facebook
                </a>

                <a href="#" class="google btn" onClick={handleGoogleSignIn}>
                    <img src={google} alt="" style={{ height: '25px', width: '30px' }} onClick={googleSignIn} /> Login with Google+
                </a>
            </div>

        </div>
    );
};

export default Login;