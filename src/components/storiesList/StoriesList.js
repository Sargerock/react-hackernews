import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import StoriesListStyled from './StoriesListStyled';
import Story from './story/Story';

const StoriesList = state => {
	const {
		isStoriesLoading,
		hasErrors,
		currentStoriesType,
		stories,
		storiesIds,
		storiesPerFetch,
		initializeStories,
		getStories
	} = state;

	const [currentFetchPosition, setCurrentFetchPosition] = useState(storiesPerFetch);

	useEffect(() => {
		initializeStories(currentStoriesType, storiesPerFetch);
	}, [initializeStories, currentStoriesType, storiesPerFetch]);

	useEffect(() => {
		if (hasErrors) {
			setCurrentFetchPosition(currentFetchPosition - storiesPerFetch);
		}
	}, [hasErrors, currentFetchPosition, storiesPerFetch]);

	const getMorePosts = () => {
		if (storiesIds && storiesIds.length > 0) {
			getStories(storiesIds.slice(currentFetchPosition, currentFetchPosition + storiesPerFetch));
			setCurrentFetchPosition(currentFetchPosition + storiesPerFetch);
		}
	};

	const mapStories = stories.map(story => <Story story={story} key={story.id}/>);

	return (
		<StoriesListStyled>
			{isStoriesLoading ?
				<div>Loading...</div> :
				hasErrors ?
					<div>Connection error, try again later.</div> :
					<InfiniteScroll
						dataLength={stories.length}
						next={getMorePosts}
						hasMore={true}
						loader={<div>Loading...</div>}
						endMessage={
							<p style={{textAlign: "center"}}>
								<b>Yay! You have seen it all</b>
							</p>
						}
					>
						{mapStories}
					</InfiniteScroll>
			}
		</StoriesListStyled>
	)
};

StoriesList.propTypes = {};

StoriesList.defaultProps = {};

export default StoriesList;