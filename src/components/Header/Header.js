import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/login">Login</a>
                <a href="/cart">Cart</a>
            </nav>
        </div>
    );
};

export default Header;