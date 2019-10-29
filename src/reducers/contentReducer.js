import {
	GET_STORIES_FAILED,
	GET_STORIES_SUCCESS,
	INITIALIZE_STORIES_REQUEST,
	INITIALIZE_STORIES_SUCCESS
} from '../constants/contentConstant';

const initialState = {
	storiesIds: [],
	stories: [],
	storiesPerFetch: 10,
	isStoriesLoading: false,
	currentStoriesType: "topstories",
	hasErrors: false,
	error: ""
};

export const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE_STORIES_REQUEST:
			return {
				...state,
				isStoriesLoading: true,
				hasErrors: false
			};
		case INITIALIZE_STORIES_SUCCESS:
			return {
				...state,
				storiesIds: [...action.payload]
			};
		case GET_STORIES_SUCCESS:
			return {
				...state,
				stories: [...state.stories, ...action.payload],
				isStoriesLoading: false
			};
		case GET_STORIES_FAILED:
			return {
				...state,
				isStoriesLoading: false,
				hasErrors: true,
				error: action.payload
			};
		default:
			return state;
	}
};