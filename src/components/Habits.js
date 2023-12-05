import React from 'react';
import Habit from './Habit';

const Habits = ({ habits, deleteHabit }) => {
  return (
    <div className="habits">
      {habits.map((habit) => (
        <Habit habit={habit} key={habit.id} deleteHabit={deleteHabit} />
      ))}
    </div>
  );
};

export default Habits;
