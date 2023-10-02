import axios from "axios";

const oddsAPI = axios.create({ baseURL: "https://odds.data.bet/affiliates/ItOPmBM7HLd-NQngUmT6Cw/json" });

async function getOdds(){
    const response = await oddsAPI.get("/")
    return response.data
}

export {
    getOdds
}
