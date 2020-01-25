import {
	GET_COMMENTS_REQUEST,
	GET_COMMENTS_SUCCESS,
	GET_STORIES_FAILED,
	GET_STORIES_SUCCESS,
	INITIALIZE_STORIES_REQUEST,
	INITIALIZE_STORIES_SUCCESS,
	RESET_COMMENTS,
	SET_COMMENT,
	SET_CURRENT_STORY,
	SET_STORIES_TYPE,
} from '../constants/contentConstant';

const initialState = {
	storiesIds: [],
	stories: [],
	storiesPerFetch: 10,
	isStoriesLoading: false,
	currentStoriesType: 'topstories',
	hasErrors: false,
	error: '',
	currentStory: '',
	isCommentsLoading: false,
	comments: {},
};

export const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE_STORIES_REQUEST:
			return {
				...state,
				isStoriesLoading: true,
				hasErrors: false,
			};
		case INITIALIZE_STORIES_SUCCESS:
			return {
				...state,
				storiesIds: [...action.payload],
				stories: [],
			};
		case GET_STORIES_SUCCESS:
			return {
				...state,
				stories: [...state.stories, ...action.payload],
				isStoriesLoading: false,
			};
		case GET_STORIES_FAILED:
			return {
				...state,
				isStoriesLoading: false,
				hasErrors: true,
				error: action.payload,
			};
		case SET_STORIES_TYPE:
			return {
				...state,
				currentStoriesType: action.payload,
			};
		case SET_CURRENT_STORY:
			return {
				...state,
				currentStory: action.payload,
			};
		case SET_COMMENT:
			return {
				...state,
				comments: {
					...state.comments,
					[action.payload.id]: { ...action.payload },
				},
			};
		case GET_COMMENTS_REQUEST:
			return {
				...state,
				isCommentsLoading: true,
			};
		case GET_COMMENTS_SUCCESS:
			return {
				...state,
				isCommentsLoading: false,
			};
		case RESET_COMMENTS:
			return {
				...state,
				isCommentsLoading: false,
				currentStory: '',
				comments: {},
			};
		default:
			return state;
	}
};
