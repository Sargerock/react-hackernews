import {
	GET_STORIES,
	GET_STORIES_FAILED,
	GET_STORIES_SUCCESS, INITIALIZE_STORIES,
	INITIALIZE_STORIES_REQUEST,
	INITIALIZE_STORIES_SUCCESS
} from '../constants/contentConstant';

export const initializeStories = (storiesType, storiesPerFetch) => ({
	type: INITIALIZE_STORIES,
	payload: {storiesType, storiesPerFetch}
});
export const getStories = storiesIdsArray => ({type: GET_STORIES, payload: {storiesIdsArray}});
export const initializeStoriesRequest = () => ({type: INITIALIZE_STORIES_REQUEST});
export const setStoriesIds = data => ({type: INITIALIZE_STORIES_SUCCESS, payload: data});
export const setStories = data => ({type: GET_STORIES_SUCCESS, payload: data});
export const setStoriesFailed = error => ({type: GET_STORIES_FAILED, payload: error});
