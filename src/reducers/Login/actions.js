import axios from 'axios'
import * as actionTypes from './actionTypes'

export const loginLoading = () => {
    return {
        type: actionTypes.LOGIN_LOADING
    }
}

export const loginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: data.token
    }
}
export const loginFail = (data) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        payload: data
    }
}
export const logout = (data) => {
    return {
        type: actionTypes.LOGOUT,
        payload: data
    }
}

export const clearError = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}


export const loginUser = (data) => {
    return axios.post('https://reqres.in/api/login', {email: data.email, password: data.password})
        .then(res => res.data)
        .catch(err => {
            throw err
        })
}
