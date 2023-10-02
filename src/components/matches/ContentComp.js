import styled from "styled-components"
import Coming from "./coming-matches"
import Live from "./running-matches"
import { useState } from "react"
import Matches from "./matches"


const P = styled.p`
    color:#888d96;
    font-size:14px;
`
const UL = styled.ul`
color:#888d96;
font-size:14px;
`
const H2 = styled.h2`
color: #FF5522
`

const H3 = styled.h3`
color: #FF5522
`

const Section = styled.section`
    max-width:850px;
    margin: 30px auto;
    position:relative
`

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



function Content(){
    const [activeTab, setActiveTab] = useState('all')

    
return(
        
    <Section>
    
    {/* <Cta href="YOUR_LINK_HERE">START BETTING NOW</Cta> */}

    <H2>Valorant Matches</H2>

    <P>The upcoming matche­s and events in 2023 offer an unparalle­led opportunity to immerse yourse­lf in the electrifying action. In this compre­hensive page, we­ will provide all the nece­ssary information about the VALORANT schedule, including past, live and upcoming matches, stages, strategies, as we­ll as tips on how to follow live matches and honor top players and te­ams. </P>
    

    <H2>
    Upcoming VALORANT Matches
    </H2>
    
    <Tabs>
        <TabItem onClick={() => setActiveTab('all')}>All</TabItem>
        <TabItem onClick={() => setActiveTab('live')}>Running</TabItem>
        <TabItem onClick={() => setActiveTab('coming')}>Coming</TabItem>
      </Tabs>
      {activeTab === 'all' && <Matches/> }
      {activeTab === 'coming' && <Coming/> }
      {activeTab === 'live' && <Live/> }

    vsc



   

    </Section>
    )
}

export default Content