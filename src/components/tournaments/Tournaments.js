import React, { useState, useEffect } from "react";
import { getOdds } from "../../services/odds/odds";
import styled from "styled-components";
import TournnamentsDate from "../TournamentsDate";

const Container = styled.div`
    max-width: 850px;
    margin: 20px auto;
    background-color: gray;
    border-radius: 5px;
    padding: 15px;
`;

const EventContainer = styled.div`
    background-color: #262626;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const EventTitle = styled.h2`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const MatchList = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #383838;
`;

const Match = styled.p`
    font-size: 14px;
    color: #bdbdbd;
    margin: 0;   // Reset default margin
    padding: 5px;
    width: 300px;
    line-height: 1.5;   // Ensure a consistent line height

    &:hover {
        background-color: #333;
    }

    @media screen and (max-width:780px){
        width:150px;
    }
`;

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;  // Remove any padding
    background-color: #3b3b3c;
    border-radius: 50%;
    line-height: 1.5;   // Ensure a consistent line height
`;


const Div = styled.div`
    border-bottom: 1px solid #383838;
    display: flex;
    gap: 25px;
    align-items: center;
`;

const Comp = styled.div`
    display: flex;
    gap: 15px;
    align-items:center;
`;

// const LogoDiv = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 30px;
//     height: 30px;
//     padding: 5px;
//     background-color: #3b3b3c;
//     border-radius: 50%;
// `;

const Logo = styled.img`
    width: 18px;
    height: 18px;
    object-fit: cover;
    border-radius: 50%;
`;

function All() {
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

    return (
        <Container>
            {error && <p>{error}</p>}
            {events.map((event, eventId) => (
                <EventContainer key={eventId}>
                    <EventTitle>{event.Name}</EventTitle>
                    <MatchList>
                        {event.Matches.map((match, matchId) => (
                            <Div key={matchId}>
                                <Comp>
                                    <Match>{match.Name} -  </Match>
                                    { match.Competitors.map(comp => (
                                        <LogoDiv key={comp.ID}>
                                            <Logo src={`http://${comp.Logo}`} alt={comp.Name} />
                                        </LogoDiv>
                                    ))}
                                </Comp>
                                <TournnamentsDate timestamp={match.StartDate} />
                            </Div>
                        ))}
                    </MatchList>
                </EventContainer>
            ))}
        </Container>
    );
}

export default All;
