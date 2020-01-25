import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
	GET_COMMENTS,
	GET_STORIES,
	INITIALIZE_STORIES,
} from '../constants/contentConstant';
import { contentAPI } from '../api/hackernewsAPI';
import {
	getCommentsRequest,
	getCommentsSuccess,
	getStories,
	initializeStoriesRequest,
	setComment,
	setCurrentStory,
	setStories,
	setStoriesFailed,
	setStoriesIds,
} from '../actions/contentAction';

function* getStoriesSaga({ payload: { storiesIdsArray } }) {
	try {
		const data = [
			...(yield all(
				storiesIdsArray.map(id => call(() => contentAPI.getStory(id)))
			)),
		];
		yield put(setStories(data));
	} catch (e) {
		yield put(setStoriesFailed(e));
	}
}

function* initializeStories({ payload: { storiesType, storiesPerFetch } }) {
	yield put(initializeStoriesRequest());
	try {
		const data = yield call(() => contentAPI.getStoriesIds(storiesType));
		yield put(setStoriesIds(data));
		yield put(getStories(data.slice(0, storiesPerFetch)));
	} catch (e) {
		yield put(setStoriesFailed(e));
	}
}

function* getStoryKids(story) {
	if (story.kids) {
		const comments = yield all(
			story.kids.map(id => call(() => contentAPI.getStory(id)))
		);
		yield all(comments.map(comment => put(setComment(comment))));
		yield all(comments.map(comment => call(() => getStoryKids(comment))));
	}
}

function* getCommentsSaga({ id }) {
	yield put(getCommentsRequest());
	try {
		const story = yield call(() => contentAPI.getStory(id));
		yield put(setCurrentStory(story));
		yield call(() => getStoryKids(story));
		yield put(getCommentsSuccess());
	} catch (e) {
		debugger;
		yield put(setStoriesFailed(e));
	}
}

function* contentSaga() {
	yield takeLatest(INITIALIZE_STORIES, initializeStories);
	yield takeLatest(GET_STORIES, getStoriesSaga);
	yield takeLatest(GET_COMMENTS, getCommentsSaga);
}

export default contentSaga;
