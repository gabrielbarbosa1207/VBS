// ReadableDate.jsx
import React from 'react';
import moment from 'moment';

function ReadableDate({ timestamp }) {
  const formattedDate = moment(timestamp).format("MMMM, Do, YYYY, h:mm A");
  
  return (
    <span>{formattedDate}</span>
  );
}

export default ReadableDate;
