import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import google from '../../images/google.png'
const Login = () => {
    //require locarion
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from)
    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handleTosignInGoogle = () => {
        signInWithGoogle()

    }
    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)


    }

    return (
        <div>


            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <p>{error?.message}</p>
                        {loading && <p>Loading...</p>}
                        <input className='submit-button' type="submit" value="Login" />
                        <div className="link">
                            <p>New to Ema-John? <Link className='form-link' to='/signup' >Create an account</Link> </p>
                        </div>
                    </form>
                    <div className='underline'>
                        <div>____________ </div>
                        <p>&emsp;or&emsp;</p>
                        <div> ____________</div>
                    </div>
                    <button onClick={handleTosignInGoogle} className='google-button'><img src={google} alt="" /><span>Continue with Google</span></button>
                </div>
            </div>


        </div>
    );
};

export default Login;