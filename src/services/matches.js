import axios from "axios";

const matchesAPI = axios.create({baseURL:"http://localhost:8000/matches"})

async function getMatches(){
    const response = await matchesAPI.get("/")

    return response.data;
}

export {
    getMatches
}