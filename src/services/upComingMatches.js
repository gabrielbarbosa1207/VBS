import axios from "axios";

const upComingMatchesAPI = axios.create({baseURL:"http://localhost:8000/matches/upcoming"})

async function getUpcomingMatches(){
    const response = await upComingMatchesAPI.get("/")
    return response.data
}

export{
    getUpcomingMatches
}