import {combineReducers} from 'redux';
import login from './Login/reducerLogin';
import users from './Users/reducerUsers';

export default combineReducers({login, users});