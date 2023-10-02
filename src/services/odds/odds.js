import axios from "axios";

const oddsAPI = axios.create({ baseURL: "http://localhost:8000/odds" });

async function getOdds(){
    const response = await oddsAPI.get("/")
    return response.data
}

export {
    getOdds
}
