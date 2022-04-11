import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
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
                        <p>New to Ema-John? <Link className='form-link' to='/signup' >Create an account</Link> </p>
                    </form>
                    <div className='underline'>
                        <div>____________ </div>
                        <p>&emsp;or&emsp;</p>
                        <div> ____________</div>
                    </div>
                    <button className='google-button'>Continue with Google</button>
                </div>
            </div>


        </div>
    );
};

export default Login;