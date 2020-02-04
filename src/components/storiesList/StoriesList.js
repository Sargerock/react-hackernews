import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import StoriesListStyled from './StoriesListStyled';
import Story from './story/Story';
import Loader from '../common/loader/Loader';

const StoriesList = props => {
	const {
		isStoriesLoading,
		hasErrors,
		stories,
		storiesIds,
		storiesPerFetch,
		initializeStories,
		getStories,
		storyType,
	} = props;

	const [currentFetchPosition, setCurrentFetchPosition] = useState(
		storiesPerFetch
	);

	useEffect(() => {
		initializeStories(storyType, storiesPerFetch);
		setCurrentFetchPosition(storiesPerFetch);
	}, [storyType, initializeStories, storiesPerFetch]);

	useEffect(() => {
		if (hasErrors) {
			setCurrentFetchPosition(currentFetchPosition - storiesPerFetch);
		}
	}, [hasErrors, currentFetchPosition, storiesPerFetch]);

	const getMorePosts = () => {
		if (storiesIds && storiesIds.length > 0) {
			getStories(
				storiesIds.slice(
					currentFetchPosition,
					currentFetchPosition + storiesPerFetch
				)
			);
			setCurrentFetchPosition(currentFetchPosition + storiesPerFetch);
		}
	};

	const mapStories = stories.map(story => (
		<Story story={story} key={story.id} />
	));

	return (
		<StoriesListStyled>
			{isStoriesLoading ? (
				<Loader />
			) : hasErrors ? (
				<div>Connection error, try again later.</div>
			) : (
				<InfiniteScroll
					dataLength={stories.length}
					next={getMorePosts}
					hasMore={true}
					loader={<div>Loading...</div>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>That's all :(</b>
						</p>
					}
				>
					{mapStories}
				</InfiniteScroll>
			)}
		</StoriesListStyled>
	);
};

StoriesList.propTypes = {};

StoriesList.defaultProps = {};

export default StoriesList;
