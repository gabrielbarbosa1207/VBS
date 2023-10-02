import React,{ useState, useEffect } from "react";
import { getOdds } from "../../services/odds/odds";
import styled from "styled-components";
import OddsDate from "../OddsDate";
// import CtaLink from "../Cta";


const EventContainer = styled.div`
    background-color:#262626;
    padding: 5px 0px;
    text-align:left;
    margin: 2px 0px;
    max-width:850px;
    @media screen and (min-width:550px){
        margin: 2px auto;
    }
`

const Event = styled.h2`
    font-size:12px;
    margin:10px;
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
    margin:0px 0px 5px 0px;
    padding: 8px 16px 16px 16px;
    box-sizing: border-box;
    max-width:850px;
    @media screen and (min-width:750px){
        margin: 5px auto;
    }
`

const ButtonContainer = styled.div`
    display:flex;
    gap:150px;
    justify-content:center;
    color:gray;
    width:100%;
    background-color:white;
    cursor:pointer; 

    @media screen and (max-width:750px){
        gap:100px;
    }
`

const Button = styled.button`
    width:100%;
    margin-top:15px;
`



function Live() {
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
                const preMatchGames = event.Matches.filter(match => match.MatchType === "Live")

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
                                    <Button onClick={handleButtonClick}>
                                        <ButtonContainer>
                                            { match.Competitors.map(comp =>(
                                                <p>{comp.Name}</p>
                                            )) }
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

export default Live;
