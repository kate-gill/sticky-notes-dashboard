import React from 'react';

const Greeting = ({ theme }) => {

    const today = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const ending = (day) => {

        if(day.endsWith('1')) return 'st';
        if(day.endsWith('2')) return 'nd';
        if(day.endsWith('3')) return 'rd';
        else return 'th';

    }

    const greetMe = (hour) => {

        if(hour >= 5 && hour < 12) return (<p className="p1">Good morning! <span role="img" className="emoji" aria-label="daySign">&#127774;</span></p>);
        if(hour >= 12 && hour < 18) return (<p className="p1">Good afternoon! <span role="img" className="emoji" aria-label="daySign">&#127774;</span></p>);
        if(hour >= 18 && hour < 23) return (<p className="p1">Good evening! <span role="img" className="emoji" aria-label="daySign">&#10024;</span></p>);
        else return (<p className="p1">Good night! <span role="img" className="emoji" aria-label="daySign">&#127769;</span></p>);
        
    }
    
    return(
        <div>
            <h2 className="greeting">{greetMe(today.getHours())}</h2>
            <hr className={theme === 'dark' ? 'hrDark' : 'hrLight'}/>
            <h3 className="greeting2">Today is {days[today.getDay()]}, {months[today.getMonth()]} {today.getDate() + ending(String(today.getDate()))}</h3>
        </div>
    )
}

export default Greeting;