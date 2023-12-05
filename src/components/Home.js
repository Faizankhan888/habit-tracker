import React from 'react';
import Habits from './Habits';
import Navbar from './Navbar';

const Home = ({ addHabit, habits, deleteHabit }) => {
  return (
    <>
      <Navbar name="Detail View" addHabit={addHabit} />
      <Habits habits={habits} deleteHabit={deleteHabit} />
    </>
  );
};

export default Home;
