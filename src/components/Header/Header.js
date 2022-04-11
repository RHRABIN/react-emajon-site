import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/order">Orders</Link>
                <Link to='/login'>Login</Link>
                {(user)
                    ? <button onClick={() => auth.signOut(() => navigate('/login'))}>Log out</button>
                    : <Link to='/signup'>Sign up</Link>
                }
            </nav>
        </div>
    );
};

export default Header;