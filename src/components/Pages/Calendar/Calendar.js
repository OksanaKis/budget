import React from 'react';
import '../../Main.css';
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({show}) => {
    console.log("Calendar")
    const handleDateClick = (dateClickInfo) => {
        console.log(dateClickInfo.dateStr);
    }

    return (
        <div className={show ? 'transform' : 'full'}>
        <FullCalendar plugins={[daygridPlugin, interactionPlugin]}
                      dateClick={handleDateClick}
        />
        </div>
    );
};

export default Calendar;