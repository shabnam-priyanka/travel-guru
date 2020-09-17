import React, { useContext } from 'react';
import './Login.css'
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from "react-router-dom";
import facebook from '../../Icon/fb.png'
import google from '../../Icon/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseauth';
import { UserContext } from '../../App';



const Login = () => {

    // this code is for new user sign in
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        success: 'false'
    })


    // this is for already logged in member 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        const fbprovider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            // The signed-in user info.
            const { name, email } = result.user;
            const signedInUser = { name: name, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    //this is for facebook sign in 

    const fbLogin = () => {
        firebase.auth().signInWithPopup(fbprovider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    return (
        <div className='login' style={{ justifyContent: 'center' }}>

            <form style={{ margin: '40px' }}>
                <h1>Create an account</h1>
                <input type='text' name='first' placeholder='First Name' className='long' />
                <br />
                <br />
                <input type='text' name='last' placeholder='Last Name' className='long' />
                <br />
                <br />
                <input type='text' name='email' placeholder='email' className='long' />
                <br />
                <br />
                <input type='text' name='password' placeholder='password' className='long' />
                <br />
                <br />
                <input type='text' name='password' placeholder='confirm password' className='long' />
                <br />
                <br />
                <Link to="/login"><Button variant="success" className='long'>Create Account </Button></Link>
                <br />
                <br />
                <h6>Already have an account? <a href="url">login </a> </h6>

            </form>
            <div class="col">
                <a href="#" class="fb btn" onClick={fbLogin}>
                    <img src={facebook} alt="" style={{ height: '25px', width: '30px' }} /> Login with Facebook
                </a>

                <a href="#" class="google btn" onClick={googleSignIn}>
                    <img src={google} alt="" style={{ height: '25px', width: '30px' }} onClick={googleSignIn} /> Login with Google+
                </a>
            </div>

        </div>
    );
};

export default Login;