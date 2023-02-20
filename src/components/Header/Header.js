import React from 'react';
import logo from '../../activity-logo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
           <img className='header-img' src={logo} alt="" />
           <h1 className='header-title'>KIDS ACTIVITY CLUB</h1> 
        </div>
    );
};

export default Header;