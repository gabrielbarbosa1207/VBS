import React,{ useState, useEffect } from "react";
import { getOdds } from "../../services/odds/odds";
import styled from "styled-components";
import OddsDate from "../OddsDate";
// import CtaLink from "../Cta";


const EventContainer = styled.div`
    background-color:#262626;
    padding: 5px 10px;
    text-align:left;
    margin: 2px 8px;
    max-width:830px;
    @media screen and (min-width:550px){
        margin: 2px auto;
    }
`

const Event = styled.h2`
    font-size:12px
`

const LogoDiv = styled.div`
    display: flex; // To center the inner image
    align-items: center;
    justify-content: center;
    width: 40px;  // Setting both width and height
    height: 40px; // ensures a square, which is essential for a perfect circle
    padding: 5px;
    background-color: #3b3b3c;
    border-radius: 50%; // This ensures a perfect circle
`;

const Logo = styled.img`
    width: 28px; // Or maybe 100% if you want it to fill its parent
    height: 28px;
    object-fit: cover; // Ensures the image isn't stretched or compressed
    border-radius: 50%; // Optional, if you want the image itself to be circular
`;


const CompetitorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin: 0px

    @media screen and (min-width:750px){
        gap:100px
    }
`;

const Competitor = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;  
    text-align: center;
    width: 100px;  // Assign a consistent width  
`;

const CompName = styled.p`
    font-size:12px;
    max-width:85px;
    
`

const OddsContainer = styled.div`
    background-color: #262626;
    margin:0px 8px 8px 8px;
    padding: 8px 16px 16px 16px;
    box-sizing: border-box;
    max-width:850px;
    @media screen and (min-width:750px){
        margin: 5px auto;
    }
`


const OddsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
  gap: 10px;

`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // This is the change to align the content to the left
  background-color: #3b3b3c;
  width: 100%;
  padding: 7px 5px;
  gap: 5px;
`;

const TeamName = styled.p`
  font-weight: 500;
  margin: 0px;
  text-align: left;
  font-size: 11px;
`;

const OddsValue = styled.p`
  color: #bb9bff;
  margin: 0px;
`;

const BetName = styled.h3`
    font-size:13px;
    margin:3px auto;
    font-weigt:700;
    color:#3b3b3c;
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    cursor: pointer;
    color:gray;
`;

const CompConteiner = styled.div`
    display: flex;
    gap: 150px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:780px){
        gap: 30px;
    }
`;

const CompeitorDivL = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;  // right align for left container
    align-items: center;
    width: 250px;

    @media screen and (max-width:780px){
        width: 120px;
    }
`;

const CompeitorDivR = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;  // left align for right container
    align-items:center;
    width: 250px;

    @media screen and (max-width:780px){
        width: 120px;
    }
`;


function Coming() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOdds();
    }, []);

    async function fetchOdds() {
        try {
            const response = await getOdds();
            setEvents(response.Sport.eSports.Events);
        } catch (err) {
            setError("Failed to fetch odds. Please try again later.");
        }
    }

    const handleButtonClick = () => {
        window.open('https://valorantbettingsites.com/go/ggbet', '_blank').focus();
      };


    return (
        <div>
            {error && <p>{error}</p>}
            {events.map(event => {
                const preMatchGames = event.Matches.filter(match => match.MatchType === "PreMatch")

                if(preMatchGames.length === 0 ){
                    return null
                } 

                return (
                    <div key={event.EventID}>
                        {/* <CtaLink /> */}
                        <EventContainer>
                            <Event>{event.Name}</Event>
                        </EventContainer>
                        {preMatchGames.map(match => (
                            <div key={match.MatchID}>
                                <OddsContainer>
                                    <p>{ match.MatchType }</p>
                                    <CompetitorContainer>
                                    {match.Competitors.map((comp, index) => (
                                        <React.Fragment key={comp.ID}>
                                            <Competitor>
                                                <LogoDiv>
                                                    <Logo src={`https://${comp.Logo}`} alt={comp.Name} />
                                                </LogoDiv>
                                                <CompName>{comp.Name}</CompName>
                                            </Competitor>

                                            {/* Insert the date at the midpoint */}
                                            {index === Math.floor(match.Competitors.length / 2) - 1 && (
                                                <div>
                                                   <OddsDate timestamp={ match.StartDate}></OddsDate>
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                    </CompetitorContainer>
                                    
                                    {match.Bets.map(bet => (
                                        <div key={bet.ID}>
                                            <BetName>{bet.Name}</BetName>
                                            <OddsRow>
                                                {bet.Odds.map(odd => (
                                                    <TeamContainer key={odd.ID}>
                                                        <TeamName>{odd.Name}</TeamName>
                                                        <OddsValue>{odd.Value}</OddsValue>
                                                    </TeamContainer>
                                                ))}
                                            </OddsRow>
                                        </div>
                                    ))}
                                    <Button onClick={handleButtonClick}>
                                    <ButtonContainer>
                                        <CompConteiner>
                                            <CompeitorDivL>
                                                <p>{match.Bets[0].Odds[0].Name}</p>
                                                <OddsValue>{match.Bets[0].Odds[0].Value}</OddsValue>
                                            </CompeitorDivL>
                                            <CompeitorDivR>
                                                <OddsValue>{match.Bets[0].Odds[1].Value}</OddsValue>
                                                <p>{match.Bets[0].Odds[1].Name}</p>
                                            </CompeitorDivR>
                                        </CompConteiner>
                                    </ButtonContainer>
                                </Button>
                                </OddsContainer>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default Coming;
