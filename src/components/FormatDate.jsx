// ReadableDate.jsx
import React from 'react';
import moment from 'moment';

function FormatDate({ timestamp }) {
  const formattedDate = moment(timestamp).format("MMM, Do, YY, h:mm A");
  
  return (
    <span>{formattedDate}</span>
  );
}

export default FormatDate;
