import { useState } from 'react';

export const Today = ({ dateInfo }) => {
  // MM DD YYYY
  const convertDateObj = new Date(
    `${dateInfo.slice(5, 7)} ${dateInfo.slice(8, 10)} ${dateInfo.slice(0, 4)}`
  );

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const month = String(convertDateObj).slice(4, 7);
  const date = String(convertDateObj).slice(8, 10);
  const day = days[convertDateObj.getDay()];

  return (
    <div className="banner-contents">
      <p className="today">
        {month} <em>{date}</em> {day}
      </p>
    </div>
  );
};
