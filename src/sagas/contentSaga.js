import { takeLatest, put, all, call } from 'redux-saga/effects';

import { GET_STORIES, INITIALIZE_STORIES } from '../constants/contentConstant';
import { contentAPI } from '../api/hackernewsAPI';
import {
	getStories,
	initializeStoriesRequest,
	setStories,
	setStoriesFailed,
	setStoriesIds
} from '../actions/contentAction';

function* getStoriesSaga({payload: {storiesIdsArray}}) {
	try {
		const data = [
			...yield all(storiesIdsArray.map(id => call(() => contentAPI.getStories(id))))
		];
		yield put(setStories(data));
	} catch (e) {
		yield put(setStoriesFailed(e))
	}
}

function* initializeStories({payload: {storiesType, storiesPerFetch}}) {
	initializeStoriesRequest();
	try {
		const data = yield call(() => contentAPI.getStoriesIds(storiesType));
		yield put(setStoriesIds(data));
		yield put(getStories(data.slice(0, storiesPerFetch)))
	} catch (e) {
		yield put(setStoriesFailed(e))
	}
}

function* contentSaga() {
	yield takeLatest(INITIALIZE_STORIES, initializeStories);
	yield takeLatest(GET_STORIES, getStoriesSaga);
}

export default contentSaga;