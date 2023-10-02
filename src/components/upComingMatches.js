import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import { getUpcomingMatches } from "../services/upComingMatches.js";
import ReadableDate from "../components/ReadableDate.jsx";


const DivContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  gap:25px
`

const DivBodyContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
`

const AppContainer = styled.div`
  border: 1px solid #1b222c;
  background-color:#1b222c;
  border-radius: 10px;
  padding: 10px 45px;
  margin: auto;
  width: 550px;

  @media(max-width:500px) {
    width: 110%;
    margin:0px
    }
`;


const LogoContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 35px;
  padding: 10px;
  
  @media (max-width: 500px) {
    display: none;
  }
`;


const CardContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  position:relative;
  height:40px;
  width:100%
`

const Date = styled.div`
  text-align:left
`

const Heading2 = styled.h2`
  margin:0px;
  padding: 10px 0px;
  font-family:Sans-serif;
  font-weight:600;
  font-size:13px;
  color:#becde3;
  text-align:center;
  margin:0px;
  padding-bottom:15px;
`

const Paragraph = styled.p`
  margin:0px;
  padding: 10px 0px;
  font-family:Sans-serif;
  font-weight:500;
  color:#becde3;
  text-align:left
`
const OpponentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
`
const OpponentDivImg = styled.div`
    height: auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding:0px 5px;

    @media(max-width:500px){
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      align-items:center;
      width:50px;
    }
`

const OpponentImg = styled.img`
  width:30px;
`

const ScoreDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap:40px;
  padding: 7px 0px;
  position: absolute;
  left:47%;

  @media(max-width:500px){
    left:39%;
    gap:10px
  }
`
const Score = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  padding:5px 15px;
  border-radius: 3px;
  background-color: #0a0e17;
  color:#e6f9ff;
  font-size:13px
  width:30px;
`

const VsContainer = styled.div`
  position:abosulte;
  left:20px;

  @media (max-width: 500px) {
    display: none;
  }
`
const Vs = styled.p`
  font-size:13px;
  color: #becde3; 

  @media (max-width: 500px) {
    display: none;
  }
 `

const NamesDiv = styled.div`
  color: #becde3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-left: 15px;
  padding-bottom: 15px;

  > *:not(:last-child) {
    margin-right: 325px;
  }

  @media (max-width: 500px) {
    display:none;
  }
`;

const NameOpp = styled.div`
  font-weight:600;

`

function UpComingMatches() {
  const [ matches, setMatches ] = useState([])

  useEffect(()=>{
    fetchMatches()
  }, [])

  async function fetchMatches(){
    const response = await getUpcomingMatches()
    setMatches(response)
  }

  return (
        <DivContainer>
          { matches.map(match => (
            <DivBodyContainer>
                <Date>
                <div>
                  <Paragraph><ReadableDate timestamp={ match.begin_at } /></Paragraph>
                </div>
                </Date>
                <AppContainer>
                  <Heading2> { match.serie.full_name }</Heading2>
                  <ScoreDiv>
                    { match.results.map(result =>(
                      <Score>{ result.score }</Score>
                    ))}
                  </ScoreDiv>
                  <CardContainer>
                  <LogoContainer>
                    <Logo src={ match.league.image_url }/>
                  </LogoContainer>
                  <OpponentDiv>
                  { match.opponents.map(opponent =>(
                    <OpponentDivImg>
                      <OpponentImg src={ opponent.opponent.image_url } />
                    </OpponentDivImg>
                    
                      )) }
                      <VsContainer>
                      <Vs>BO{ match.number_of_games }</Vs>
                      </VsContainer>
                  </OpponentDiv>
                </CardContainer>
                  <NamesDiv>
                    { match.opponents.map(opponent =>(
                      <NameOpp>{ opponent.opponent.acronym } </NameOpp>
                  ))}
                  </NamesDiv>
              </AppContainer>
            </DivBodyContainer>
          )) }
        </DivContainer>
  );
}

export default UpComingMatches;