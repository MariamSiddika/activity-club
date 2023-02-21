
import './Time.css'
const Time = () => {
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
    return (
        <div className='time-container'>
            <div>
                <h3>Add a Break</h3>
                <div className='button-container'>
                    {
                        timeData.map(time => <button>{time.minute} min</button>)
                    }
                </div>
                <h3>Activity Detail</h3>
                <div className='calculate-time'>
                    <h4>Activity Time: {}</h4>
                    <h4>Break Time: {}</h4>
                </div>
            </div>
        </div>
    );
};

export default Time;