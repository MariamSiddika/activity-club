
import { useState } from 'react';
import './Time.css'
const Time = (props) => {
    const timeData = [
        {
            minute: 10,
            id: 1
        },
        {
            minute: 15,
            id: 2
        },
        {
            minute: 20,
            id: 3
        }
    ]
    const [restTime, setRestTime] = useState(0);

    const handleBreak = (breakTime) =>{
        const restTime = 0 + breakTime;
        setRestTime(restTime);
    }
    return (
        <div className='time-container'>
            <div>
                <h3>Add a Break</h3>
                <div className='button-container'>
                    {
                        timeData.map(time => <button onClick={() => handleBreak(time.minute)} key ={time.id}>{time.minute} min</button>)
                    }
                </div>
                <h3>Activity Detail</h3>
                <div className='calculate-time'>
                    <h4>Activity Time: {props.time}</h4>
                    <h4>Break Time: {restTime}</h4>
                </div>
                <button className='completeActivityBtn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Time;