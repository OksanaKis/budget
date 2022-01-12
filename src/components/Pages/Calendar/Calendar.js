import React from 'react';
import '../../Main.css';

const Calendar = ({show}) => {
    console.log("Calendar")
    return (
        <div className={show ? 'transform' : 'full'}>
            Calendar
        </div>
    );
};

export default Calendar;