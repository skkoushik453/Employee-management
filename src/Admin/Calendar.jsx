import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the days in the current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Function to handle month navigation
  const changeMonth = (amount) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + amount));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const holidays = [6, 13, 20, 27]; // Example holiday dates (1-indexed)
  
  return (
    <div className="calendar p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)} className="bg-blue-500 text-white px-2 py-1 rounded-md">
          Previous
        </button>
        <h2 className="text-2xl font-semibold">{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={() => changeMonth(1)} className="bg-blue-500 text-white px-2 py-1 rounded-md">
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} className="text-center font-bold">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</div>
        ))}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i} className="flex items-center justify-center h-16"></div> // Empty cells for the days before the first day of the month
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div
            key={i + 1}
            className={`flex items-center justify-center h-16 rounded-lg 
              ${holidays.includes(i + 1) ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'} 
              transition duration-200 ease-in-out hover:scale-105`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
