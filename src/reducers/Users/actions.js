import axios from 'axios'
import * as actionTypes from './actionTypes'

export const getUsersLoading = () => {
    return {
        type: actionTypes.GET_USERS_LOADING
    }
}

export const getUsersSuccess = (data) => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        payload: data.data
    }
}
export const getUsersFail = (data) => {
    return {
        type: actionTypes.GET_USERS_FAIL,
        payload: data
    }
}

export const getUsers = () => {
    return axios('https://reqres.in/api/users?page=1')
        .then(res => res.data)
        .catch(err => err)
}
