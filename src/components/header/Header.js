import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className="header-nav">
            <a href="#"><img src={logo} alt="" /></a>
            <div>
                <a href="/order">Order</a>
                <a href="/order-rivew">Order Rivew</a>
                <a href="/manage-history">Manage History</a>
            </div>
        </nav>
    );
};

export default Header;