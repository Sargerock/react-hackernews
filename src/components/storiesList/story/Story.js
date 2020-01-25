import React from 'react';
import StoryStyled from './StoryStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import { dateToNowDifference, extractHostNameFromURL } from '../../../utils';
import { Link } from 'react-router-dom';

const Story = ({ story }) => {
	const { id, title, type, by, time, score, url, descendants } = story;

	return (
		<StoryStyled>
			<div>
				<span className="post-reputation">{score}</span>
				<span className="post-info">
					{type} posted by {by} {dateToNowDifference(time)}
				</span>
			</div>
			<div className="post-body">
				<a href={url || ''} target="_blank" rel="noopener noreferrer">
					{title}
				</a>
			</div>
			<div>
				<Link to={`/comments/${id}`} className="post-btn-comment">
					<FontAwesomeIcon icon={faComment} className="mr-5" />
					&nbsp;{descendants} comments
				</Link>
				<a
					href={`https:\\${extractHostNameFromURL(url)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="post-btn-comment"
				>
					<FontAwesomeIcon icon={faHashtag} className="mr-5" />
					&nbsp;{extractHostNameFromURL(url)}
				</a>
			</div>
		</StoryStyled>
	);
};

Story.propTypes = {};

Story.defaultProps = {};

export default Story;
