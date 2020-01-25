import {
	GET_COMMENTS,
	GET_COMMENTS_REQUEST,
	GET_COMMENTS_SUCCESS,
	GET_STORIES,
	GET_STORIES_FAILED,
	GET_STORIES_SUCCESS,
	INITIALIZE_STORIES,
	INITIALIZE_STORIES_REQUEST,
	INITIALIZE_STORIES_SUCCESS,
	RESET_COMMENTS,
	SET_COMMENT,
	SET_CURRENT_STORY,
	SET_STORIES_TYPE,
} from '../constants/contentConstant';

export const initializeStories = (storiesType, storiesPerFetch) => ({
	type: INITIALIZE_STORIES,
	payload: { storiesType, storiesPerFetch },
});
export const getStories = storiesIdsArray => ({
	type: GET_STORIES,
	payload: { storiesIdsArray },
});
export const initializeStoriesRequest = () => ({
	type: INITIALIZE_STORIES_REQUEST,
});
export const setStoriesIds = data => ({
	type: INITIALIZE_STORIES_SUCCESS,
	payload: data,
});
export const setStories = data => ({
	type: GET_STORIES_SUCCESS,
	payload: data,
});
export const setStoriesFailed = error => ({
	type: GET_STORIES_FAILED,
	payload: error,
});
export const setStoriesType = type => ({
	type: SET_STORIES_TYPE,
	payload: type,
});
export const getComments = id => ({
	type: GET_COMMENTS,
	id,
});
export const getCommentsRequest = () => ({
	type: GET_COMMENTS_REQUEST,
});
export const getCommentsSuccess = () => ({
	type: GET_COMMENTS_SUCCESS,
});
export const setCurrentStory = story => ({
	type: SET_CURRENT_STORY,
	payload: story,
});
export const resetComments = () => ({
	type: RESET_COMMENTS,
});
export const setComment = comment => ({
	type: SET_COMMENT,
	payload: comment,
});
