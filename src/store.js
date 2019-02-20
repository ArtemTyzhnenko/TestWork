import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import logger from 'redux-logger'
import rootReducer from './reducers';
import mySaga from './reducers/sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(mySaga);