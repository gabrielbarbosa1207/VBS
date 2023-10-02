import { useState } from "react";
import Odds from "../components/odds/Odds";
import { createGlobalStyle } from "styled-components"
import styled from "styled-components";
import Coming from "../components/odds/Upcoming-odds";
import Live from "../components/odds/Running-odds";

const GlobalStyle = createGlobalStyle`
  html,body{
    margin: 0px;
    padding: 0px;
    background-color:#1c1c1c;
    color:white;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: 'Inter', sans-serif;
  }
`

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  font-family: sans-serif;
  color:#becde3;
  margin:0px;
  padding:24px;
` // Removed the stray backslash

const Tabs = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 20px 0;
    list-style-type: none;
`;

const TabItem = styled.li`
    margin: 0 10px;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 8px;
    background-color:  ${(props) => (props.isActive ? 'gray' : '#3c3c3c')};
    transition: background-color 0.2s ease;


    &:hover {
        background-color: #3c3c3c;
    }
`;


function OddsRoute() {
  const [activeTab, setActiveTab] = useState('all')

  return(
    <div>
      <GlobalStyle />
      <Title>
        VALORANT Real-Time Betting Odds
      </Title>
      <Tabs>
        <TabItem onClick={() => setActiveTab('all')}>All</TabItem>
        <TabItem onClick={() => setActiveTab('live')}>Running</TabItem>
        <TabItem onClick={() => setActiveTab('coming')}>Coming</TabItem>
      </Tabs>
      {activeTab === 'all' && <Odds/> }
      {activeTab === 'coming' && <Coming/> }
      {activeTab === 'live' && <Live/> }
    </div>
  );
}

export default OddsRoute;
