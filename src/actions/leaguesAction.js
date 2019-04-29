import FotballAPI from './../api/leaguesAction.js';

export const TeamTypes = {
    RECIVE_STANDINGS: 'TeamTypes.RECIVE_DETAILS'
}

function reciveTeamStandings(data) {
    return {
        type: TeamTypes.RECIVE_DETAILS,
        data
    }
}

export const getLeaguesStandings = ({
    code
}) => {
    return async (dispatch) => {
        const response = await FotballAPI.get({ code });
        dispatch(reciveTeamStandings(response.data));
    }
}

