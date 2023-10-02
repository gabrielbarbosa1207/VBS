import axios from "axios";

const tournamentsAPIS = axios.create({ baseURL:"http://localhost:8000/tournaments" })

async function getTournaments(){
    const response = await tournamentsAPIS.get("/")
    
    return response.data
}

export {
    getTournaments
}