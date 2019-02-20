import * as actionTypes from './actionTypes';

const initialState = {
    users: [],
    isLoading: false,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            };
        case actionTypes.GET_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default users;