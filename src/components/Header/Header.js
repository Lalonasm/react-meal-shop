import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/products">Products</a>
                <a href="/pricing">Pricing</a>
                <a href="/resources">Resources</a>
                <a href="/community">Community</a>
                <a href="/company">Company</a>
            </div>

        </nav>
    );
};

export default Header;