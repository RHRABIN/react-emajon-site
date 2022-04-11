import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shiping = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const handlePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleAddress = (event) => {
        setAddress(event.target.value)
    }
    const handleShiping = (event) => {
        event.preventDefault()
        const result = { name, email, address, phone }
        console.log(result)
    }
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleShiping}>
                        <div className="input-group">
                            <label htmlFor="">Name</label>
                            <input onBlur={handleName} type="text" name="name" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input value={user?.email} type="email" readOnly name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Address</label>
                            <input onBlur={handleAddress} type="text" name="address" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Phone</label>
                            <input onBlur={handlePhone} type="text" name="phone" id="" required />
                        </div>

                        <input className='submit-button' type="submit" value="Save shipiing info" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Shiping;