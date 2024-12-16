import { useState } from "react";
import "./Calendar.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Example event data
  const events = {
    "2024-12-16": ["Meeting with team at 10 AM", "Lunch with John at 1 PM"],
    "2024-12-25": ["Christmas Celebration"],
    "2024-12-31": ["New Year's Eve Party at 8 PM"],
  };

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Helper function to generate days in the month
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let days = [];
    for (let i = 1 - firstDay; i <= daysInMonth; i++) {
      if (i <= 0) {
        days.push(null); // Empty spaces for days before the month starts
      } else {
        days.push(i);
      }
    }
    return days;
  };

  const days = generateCalendar(currentMonth, currentYear);

  // Handler to change month
  const changeMonth = (delta) => {
    setCurrentDate(new Date(currentYear, currentMonth + delta, 1));
  };

  // Handle day click to show events
  const handleDayClick = (day) => {
    if (!day) return;
    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    if (events[formattedDate]) {
      setSelectedDate({ date: formattedDate, events: events[formattedDate] });
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <button className="month-nav" onClick={() => changeMonth(-1)}>
            <GrFormPrevious />
          </button>
          <h2 className="calendar-month">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h2>
          <button className="month-nav" onClick={() => changeMonth(1)}>
            <MdNavigateNext />
          </button>
        </div>

        <div className="calendar-days">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div className="calendar-day-name" key={day}>
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            const formattedDate = day
              ? `${currentYear}-${String(currentMonth + 1).padStart(
                  2,
                  "0"
                )}-${String(day).padStart(2, "0")}`
              : null;
            return (
              <div
                key={index}
                className={`calendar-day ${
                  events[formattedDate] ? "event-day" : ""
                }`}
                onClick={() => handleDayClick(day)}
              >
                {day || ""}
              </div>
            );
          })}
        </div>

        {/* Event Modal */}
        {showModal && selectedDate && (
          <div className="event-modal">
            <div className="event-modal-content">
              <h3>Events on {selectedDate.date}</h3>
              <ul>
                {selectedDate.events.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
