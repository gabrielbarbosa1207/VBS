import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const DateWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center; // Center children horizontally
  justify-content: left; // Center children vertically
  gap:10px;

  @media screen and (max-width:780px){
    display:none;
  }
`;

const TimeText = styled.span`
  color: gray;
  font-weight: 600;
  display: block;
`;

const DateText = styled.span`
  color: gray;
  font-weight: 400;  // lighter compared to the time
  display: flex;
  font-size: 0.8em;  // making it smaller
`;

function TournnamentsDate({ timestamp }) {
  const isToday = moment().isSame(moment(timestamp), 'day');

  return (
    <DateWrapper>
      <TimeText>{moment(timestamp).format("HH:mm")}</TimeText>  {/* 24-hour format */}
      {isToday ? (
        <DateText>Today</DateText>
      ) : (
        <DateText>{moment(timestamp).format("MMM, Do")}</DateText>
      )}
    </DateWrapper>
  );
}

export default TournnamentsDate;
