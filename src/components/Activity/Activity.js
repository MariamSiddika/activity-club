import React from 'react';
import Time from '../Time/Time';
import User from '../User/User';
import './Activity.css'

const Activity = () => {
    return (
        <div className='activity'>
            <User></User>
            <Time></Time>
        </div>
    );
};

export default Activity;