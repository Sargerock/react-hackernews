import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CommentsList from './CommentsListComponent';
import { getComments, resetComments } from '../../actions/contentAction';

const CommentsListContainer = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const dispatchComments = useCallback(() => {
		dispatch(getComments(id));
	}, [id, dispatch]);
	const dispatchReset = useCallback(() => {
		dispatch(resetComments());
	}, [dispatch]);

	useEffect(() => {
		dispatchComments();
		return () => {
			dispatchReset();
		};
	}, [dispatchComments, dispatchReset]);

	const story = useSelector(state => state.content.currentStory);
	const isCommentsLoading = useSelector(
		state => state.content.isCommentsLoading
	);

	if (!story) return <div>Loading</div>;
	return <CommentsList {...story} isCommentsLoading={isCommentsLoading} />;
};
export default CommentsListContainer;
