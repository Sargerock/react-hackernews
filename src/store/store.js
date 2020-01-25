import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { contentReducer } from '../reducers/contentReducer';
import contentSaga from '../sagas/contentSaga';

const reducers = combineReducers({
	content: contentReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(contentSaga);

export default store;
