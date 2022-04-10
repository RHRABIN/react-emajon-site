import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
                        <div className="input-group">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" name="confirm-password" id="" required />
                        </div>
                        <input className='submit-button' type="submit" value="Sign up" />
                        <p>Already have an account? <Link className='form-link' to='/login' >Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;