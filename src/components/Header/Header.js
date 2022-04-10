import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/order">Orders</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign up</Link>
            </nav>
        </div>
    );
};

export default Header;