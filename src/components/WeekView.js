import React from 'react';
import { useNavigate } from 'react-router-dom';
import DayView from './DayView';
import Navbar from './Navbar';

const WeekView = ({ habitDone, habitUnDone, habitNone, habits }) => {
  const navigate = useNavigate();
  // getting habit from habits state acording to local storage id and set it on habit
  let habit = {};
  for (let i = 0; i < habits.length; i++) {
    if (habits[i].id === localStorage.getItem('id')) {
      habit = habits[i];
    }
  }

  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{ textTransform: 'capitalize' }}>
        {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayView
            day={day}
            key={index}
            habitDone={habitDone}
            habitUnDone={habitUnDone}
            habitNone={habitNone}
          />
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button" onClick={() => navigate("/habit-tracker")}>
          Back to Detail View
        </button>
      </div>
    </>
  );
};

export default WeekView;
