import React from 'react';

import Loader from '../common/loader/Loader';
import { dateToNowDifference, extractHostNameFromURL } from '../../utils';
import CommentContainer from './comment/CommentContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import { faHashtag } from '@fortawesome/free-solid-svg-icons/faHashtag';
import Div from './CommentsListStyled';

const CommentsList = ({
	by,
	descendants,
	kids,
	score,
	time,
	title,
	url,
	isCommentsLoading,
}) => {
	const mapKidsToCommentContainer = kids.map(x => (
		<CommentContainer key={x} id={x} />
	));
	return (
		<Div>
			<div>
				<div>
					<span className="post-reputation">{score}</span>
					<span className="post-info">
						posted by {by} {dateToNowDifference(time)}
					</span>
				</div>
				<div className="post-body">
					<a
						href={url || ''}
						target="_blank"
						rel="noopener noreferrer"
					>
						{title}
					</a>
				</div>
				<div>
					<a href="#void" className="post-btn-comment">
						<FontAwesomeIcon icon={faComment} className="mr-5" />
						&nbsp;{descendants} comments
					</a>
					<a
						href={`https:\\${extractHostNameFromURL(url)}`}
						className="post-btn-comment"
					>
						<FontAwesomeIcon icon={faHashtag} className="mr-5" />
						&nbsp;{extractHostNameFromURL(url)}
					</a>
				</div>
			</div>
			{isCommentsLoading ? <Loader /> : mapKidsToCommentContainer}
		</Div>
	);
};

export default CommentsList;
