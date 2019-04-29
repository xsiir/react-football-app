import axios from 'axios';

const API_KEY = '09655cb8d0e34f6fb81f2800e5eb12d5';
const API_URL = `https://api.football-data.org/v2/matches`

export default {
    getTeams: ({ code }) => {
        const url = `/v2/competitions/${code}/standings`;
        return axios.get(url, { 'headers': { 'X-Auth-Token': API_KEY } })
    }
}