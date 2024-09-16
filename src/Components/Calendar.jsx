import React, { useState } from 'react';
import dayjs from 'dayjs';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const today = dayjs();

  const daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  let startDay = currentMonth.startOf('month').day();
  startDay = (startDay + 1) % 7;

  const daysInMonth = currentMonth.daysInMonth();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <>
      <div className="block col-span-4 p-6 bg-white custom-shadow">
        {}
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))} className="text-[var(--primary-color)] font-bold hover:text-[var(--text-color)]">
            Prev
          </button>
          <h2 className="text-xl text-[var(--primary-color)] font-bold">{currentMonth.format('MMMM YYYY')}</h2>
          <button onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))} className="text-[var(--primary-color)] font-bold hover:text-[var(--text-color)]">
            Next
          </button>
        </div>

        {}
        <div className="grid grid-cols-7 text-center">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-[var(--primary-color)] font-bold">{day}</div>
          ))}

          {}
          {calendarDays.map((day, index) => {
            const isToday =
              day &&
              currentMonth.year() === today.year() &&
              currentMonth.month() === today.month() &&
              day === today.date();

            return (
              <div
                key={index}
                className={`h-7 w-7 flex justify-center items-center rounded-full mx-auto text-sm ${
                  isToday ? 'bg-[var(--primary-color)] text-white' : 'text-black'
                }`}
              >
                {day}
              </div>
          );
        })}
      </div>
    </div>
  </>
    
  );
};

export default Calendar;