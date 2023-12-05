import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import WeekView from './WeekView';

const App = () => {
  const [habits, setHabits] = useState([]);
  let id = 1;
  const addHabit = (name) => {
    const today = new Date();
    let day = today.getDate() - today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();

    const habit = {
      id: id++,
      name,
      weekLog: [
        {
          id: 0,
          day: 'Sunday',
          dd: day,
          mm: month,
          yyyy: year,
          isDone: '',
        },
        {
          id: 1,
          day: 'Monday',
          dd: day + 1,
          mm: month,
          yyyy: year,
          isDone: '',
        },
        {
          id: 2,
          day: 'Tuesday',
          dd: day + 2,
          mm: month,
          yyyy: year,
          isDone: '',
        },
        {
          id: 3,
          day: 'Wednesday',
          dd: day + 3,
          mm: month,
          yyyy: year,
          isDone: '',
        },
        {
          id: 4,
          day: 'Thursday',
          dd: day + 4,
          mm: month,
          yyyy: year,
          isDone: '',
        },
        {
          id: 5,
          day: 'Friday',
          dd: day + 5,
          mm: month,
          yyyy: year,
          isDone: '',
        },
        {
          id: 6,
          day: 'Saturday',
          dd: day + 6,
          mm: month,
          yyyy: year,
          isDone: '',
        },
      ],
    };

    setHabits([...habits, habit]);
  };

  const deleteHabit = (id) => {
    const deleted = habits.filter((habit) => habit.id !== id);
    setHabits(deleted);
  };

  const habitDone = (id) => {
    let tempHabits = [...habits];
    for (let i = 0; i < tempHabits.length; i++) {
      if (tempHabits[i].id === Number(localStorage.getItem('id'))) {
        tempHabits[i].weekLog[id].isDone = true;
      }
    }

    setHabits(tempHabits);
  };

  const habitUnDone = (id) => {
    let tempHabits = [...habits];
    for (let i = 0; i < tempHabits.length; i++) {
      if (tempHabits[i].id === Number(localStorage.getItem('id'))) {
        tempHabits[i].weekLog[id].isDone = false;
      }
    }
    setHabits(tempHabits);
  };

  const habitNone = (id) => {
    let tempHabits = [...habits];
    for (let i = 0; i < tempHabits.length; i++) {
      if (tempHabits[i].id === Number(localStorage.getItem('id'))) {
        tempHabits[i].weekLog[id].isDone = '';
      }
    }
    setHabits(tempHabits);
  };

  return (
    <>
      <Routes>
        <Route
          path="/habit-tracker"
          element={
            <Home
              addHabit={addHabit}
              habits={habits}
              deleteHabit={deleteHabit}
            />
          }
        />
        <Route
          path="/week-view"
          element={
            <WeekView
              habitDone={habitDone}
              habitUnDone={habitUnDone}
              habitNone={habitNone}
              habits={habits}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
