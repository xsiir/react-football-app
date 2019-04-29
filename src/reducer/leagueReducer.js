import { TeamTypes } from './../actions/leaguesAction'

const defaultState = {
    loaded: false,
    data: {}
};

export default (state = defaultState, action) => {

    switch (action.type) {
        case TeamTypes.RECIVE_STANDIGNS:
            return {
                ...state,
                loaded: true,
                data: action.data
            }
    }

    return state;
};