import { connect } from 'react-redux';

import { getStories, initializeStories } from '../../actions/contentAction';
import StoriesList from './StoriesList';

const mapStateToProps = (state, props) => {
		const {stories, storiesIds, storiesPerFetch, isStoriesLoading, hasErrors, currentStoriesType} = state.content;
		return {
			stories,
			storiesIds,
			currentStoriesType,
			storiesPerFetch,
			isStoriesLoading,
			hasErrors,
			storyType: props.storyType
		}
	}
;

export default connect(mapStateToProps, {initializeStories, getStories})(StoriesList);
