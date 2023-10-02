import axios from "axios";

const matchesAPI = axios.create({baseURL:"https://odds.data.bet/affiliates/ItOPmBM7HLd-NQngUmT6Cw/json"})

async function getMatches(){
    const response = await matchesAPI.get("/")

    return response.data;
}

export {
    getMatches
}