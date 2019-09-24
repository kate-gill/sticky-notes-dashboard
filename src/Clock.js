import React, {useState, useEffect} from 'react';

const Clock = () => {

    const[date, setDate] = useState(new Date());

    useEffect(() => {

        const timer = setInterval( () => tick(), 1000)

        return function clear() {
            clearInterval(timer);
        }

    });

    const tick = () => {
        setDate(new Date());
    }

    return (
            <div>
                <h2 className="clock">{date.toLocaleTimeString()}</h2>
            </div>
        )

}


export default Clock;