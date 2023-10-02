import { createGlobalStyle } from "styled-components"
import styled from "styled-components";
import Content from "../components/matches/ContentComp";
import { Helmet } from 'react-helmet';
// import CtaLink from "../components/Cta";

const GlobalStyle = createGlobalStyle`
  html,body{
    margin: 0px;
    padding: 20px 8px 40px 8px;
    background-color:#1c1c1c;
    color:white;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-family: 'Inter', sans-serif;
  }
`

const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  font-family: sans-serif;
  color:#becde3;
  margin:0px;
  padding:24px;
  color: #FF5522;
` // Removed the stray backslash


function MatchesRoute() {

  return(
    <div>
      <GlobalStyle />
      <Helmet>
        <title>Valorant Tournaments: Schedule - Leagues - VCT Events</title>
        <meta name="description" content="View all past Valorant esports tournaments and those being played today. Follow the VCT Pro League and keep track of all dates for the next events on our page." />
        </Helmet>
      <Title>
        VALORANT REAL-TIME MATCHES
      </Title>

      <Content />
      {/* <CtaLink /> */}


    </div>
  );
}

export default MatchesRoute;
