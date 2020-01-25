import React from 'react';
import CommentContainer from './CommentContainer';
import Div from './CommentStyled';
import { dateToNowDifference } from '../../../utils';

const Comment = ({ text, kids, by, time, margin }) => {
	const mapKidsToCommentContainer = kids.map(x => (
		<CommentContainer key={x} id={x} margin={(margin || 0) + 15} />
	));
	return (
		<Div margin={margin}>
			<p className="header">
				By {by} {dateToNowDifference(time)}
			</p>
			<p dangerouslySetInnerHTML={{ __html: text }} />
			{mapKidsToCommentContainer}
		</Div>
	);
};

Comment.defaultProps = {
	kids: [],
};

export default Comment;
