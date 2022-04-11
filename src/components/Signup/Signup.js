import React from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../images/google.png'
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleGoogleSignup = () => {
        signInWithGoogle()
    }
    //create user by click
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password is no match!');
            return;
        }

        if (password.length < 6) {
            setError('password should minimum 6 character length');
            return;
        }
        setError("");
        createUserWithEmailAndPassword(email, password);


    }
    //end the create user

    return (
        <div>

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='submit-button' type="submit" value="Sign up" />
                        <div className="link"><p>Already have an account? <Link className='form-link' to='/login' >Login</Link> </p></div>
                    </form>
                    <div className='underline'>
                        <div>____________</div>
                        <p>&emsp; or &emsp; </p>
                        <div>____________</div>
                    </div>
                    <button onClick={handleGoogleSignup} className='google-button'><img src={google} alt="" /><span>Continue with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Signup;