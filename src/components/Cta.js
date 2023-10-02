import { useEffect, useState } from "react";
import styled from "styled-components";
import { getOdds } from "../services/odds/odds";




const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    color: gray;
    cursor:pointer;
    gap: 30px;
    position: fixed;  
    bottom: 0;  // Position it at the bottom
    width: 850px;  
    left: 50%;  // Move the left edge to the center of the screen
    transform: translateX(-50%);  // Shift it back by half of its own width
    padding: 10px 0;  // Some padding to make it look good
    background-color: white;  // The red color as per requirement
    z-index: 100;
    border:3px solid #FFFAFA;
    border-radius: 5px 5px 0px 0px;

    @media screen and (max-width:750px){
        width: 100%;
        transform: none;  // Reset the transform
        background-color: white;
        left:0;
    }
`


const Container2 = styled.div`
    display:flex;
    gap:15px;
    width:150px;
    align-items:center;
    text-align:center;
    justify-content:center;

`

const Odds = styled.p`
    color: #bb9bff;
    font-size:16px;
    width:50px;

`

const Name = styled.p`
    color: gray;
    font-size:16px;
    width:150px

    @media screen and (max-width:750px){
        width:auto;
    }

`

const Vs = styled.p`
color: gray;

`

function CtaLink(){

    const [firstMatch, setFirstMatch] = useState();

    useEffect(()=>{
        fetchEvents()
    },[])

    async function fetchEvents(){
        const response = await getOdds();
        const match = response.Sport.eSports.Events[0].Matches[0];
        setFirstMatch(match);
    }
    

    const handleButtonClick = () => {
        window.open('https://valorantbettingsites.com/go/ggbet', '_blank').focus();
      };

      return (
        <button type="button" onClick={handleButtonClick}>
    
            <Container>
                { firstMatch && 
                  <>
                    <Container2>
                        <Name>{firstMatch.Bets[0].Odds[0].Name}</Name>
                        <Odds>{firstMatch.Bets[0].Odds[0].Value}</Odds>
                    </Container2>
                    <Vs>vs</Vs>
                    <Container2>
                        <Odds>{firstMatch.Bets[0].Odds[1].Value}</Odds>
                        <Name>{firstMatch.Bets[0].Odds[1].Name}</Name>
                       
                    </Container2>
                  </>
                }
            <div>
                {firstMatch.MatchType}
            </div>
            </Container>
        </button>
    );
    
    
}

export default CtaLink