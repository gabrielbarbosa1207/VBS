import axios from "axios";

const tournamentsAPIS = axios.create({ baseURL:"http://localhost:8000/tournaments/upcoming" })

async function getNewTournaments(){
    const response = await tournamentsAPIS.get("/")
    
    return response.data
}

export {
    getNewTournaments
}