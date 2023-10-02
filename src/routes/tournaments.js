import { useState } from "react";
import { createGlobalStyle } from "styled-components"
import styled from "styled-components";
import Coming from "../components/tournaments/coming-tournaments";
import Live from "../components/tournaments/running-tournaments"
import Content from "../components/tournaments/ContentComp";
import All from "../components/tournaments/Tournaments";
import { Helmet } from "react-helmet";
// import CtaLink from "../components/Cta";

const GlobalStyle = createGlobalStyle`
  html,body{
    margin: 0px;
    padding: 20px 8px 40px 8px;
    background-color:#1c1c1c;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: 'Inter', sans-serif;
  }
`

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  font-family: sans-serif;
  color:#FF5522;
  margin:0px;
  padding:24px;
` // Removed the stray backslash

const Tabs = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 20px 0;
    color:white;
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


function Tournames() {
  const [activeTab, setActiveTab] = useState('all')

  return(
    <div>
      <GlobalStyle />
      <Title>
        VALORANT TOURNAMENTS
      </Title>
      <Helmet>
        <title>Valorant Matches: VCT Schedule - Live Scores & Results</title>
        <meta name="description" content="View the VCT esports schedule and upcoming matches with live scores and stats. The Valorant Pro games and the schedule is updated in real-time for our users." />
        </Helmet>
      <Tabs>
        <TabItem onClick={() => setActiveTab('all')}>All</TabItem>
        <TabItem onClick={() => setActiveTab('live')}>Running</TabItem>
        <TabItem onClick={() => setActiveTab('coming')}>Coming</TabItem>
      </Tabs>
      {activeTab === 'all' && <All/> }
      {activeTab === 'live' && <Live/> }
      {activeTab === 'coming' && <Coming/> }

      <Content />
      {/* <CtaLink /> */}



    </div>
  );
}

export default Tournames;
