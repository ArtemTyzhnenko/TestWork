import * as actionTypes from './actionTypes';

const initialState = {
    auth: false,
    isLoading: false,
    token: null,
    error: '',
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                auth: true,
                isLoading: false,
                token: action.payload,
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                auth: false,
                isLoading: false,
                error: action.payload,
            };
        case actionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: '',
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                auth: false,
                isLoading: null,
                token: null,
            };
        default:
            return state;
    }
};

export default login;