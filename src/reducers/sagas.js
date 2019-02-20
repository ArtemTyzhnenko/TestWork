import {call, put, takeEvery} from 'redux-saga/effects'
import {loginUser, loginLoading, loginSuccess, loginFail, clearError} from './Login/actions'
import {getUsersLoading, getUsersSuccess, getUsersFail, getUsers} from './Users/actions'

function* Login(action) {
    yield put(loginLoading())
    try {
        const data = yield call(loginUser, action.payload)
        yield put(loginSuccess(data))
        yield put(clearError())
        action.payload.callback()
    } catch (e) {
        yield put(loginFail(e.response.data.error))
    }
}

function* getUsersSaga() {
    yield put(getUsersLoading())
    try {
        const data = yield call(getUsers)
        yield put(getUsersSuccess(data))
    } catch (e) {
        yield put(getUsersFail(e))
    }
}

function* mySaga() {
    yield takeEvery("USER_LOGIN", Login)
    yield takeEvery("GET_USERS_SAGA", getUsersSaga)
}

export default mySaga;