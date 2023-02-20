import React from 'react';
import './User.css';
import user from '../../user.jpg';

const User = () => {
    return (
        <div className='user-container'>
            <div className='user'>
                <img src={user} alt="user" />
                <div>
                    <h4>Mariam Siddika</h4>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='user-info'>
                <div>
                    <h3>55 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.8 </h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>24 <small>years</small></h3>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default User;