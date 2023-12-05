import React from 'react';

const DayView = ({ day, habitDone, habitUnDone, habitNone }) => {
  // get today date
  const today = new Date();
  // get day from today date
  const todayDay = today.getDay();

  // get date details from providing date
  const date = new Date(day.yyyy, day.mm, day.dd);

  // function call after click done icon--------------
  const markToDone = () => {
    if (day.id > todayDay) {
      alert('You cannot change your next days status');
      return;
    }

    habitDone(day.id);
  };
  // -------------------------------------------------

  // function call after click undone icon------------
  const markToUnDone = () => {
    if (day.id > todayDay) {
      alert('You cannot change your next days status');
      return;
    }

    habitUnDone(day.id);
  };
  // --------------------------------------------------

  // function call after click none icon--------------
  const markToNone = () => {
    if (day.id > todayDay) {
      alert('You cannot change your next days status');
      return;
    }

    habitNone(day.id);
  };
  // -------------------------------------------------

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
      <i
        className={
          day.isDone === true
            ? 'fa-solid fa-circle-check circle-icon active'
            : 'fa-solid fa-circle-check circle-icon'
        }
        onClick={markToDone}
      ></i>
      <i
        className={
          day.isDone === false
            ? 'fa-solid fa-circle-xmark circle-icon active'
            : 'fa-solid fa-circle-xmark circle-icon'
        }
        onClick={markToUnDone}
      ></i>
      <i
        className={
          day.isDone === ''
            ? 'fa-solid fa-circle-minus circle-icon active'
            : 'fa-solid fa-circle-minus circle-icon'
        }
        onClick={markToNone}
      ></i>
    </div>
  );
};

export default DayView;
