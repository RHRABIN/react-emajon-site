import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div>


            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" id="" required />
                        </div>
                        <input className='submit-button' type="submit" value="Login" />
                        <p>New to Ema-John? <Link className='form-link' to='/signup' >Create an account</Link> </p>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Login;