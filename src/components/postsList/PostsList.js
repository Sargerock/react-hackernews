import React from 'react';
import PropTypes from 'prop-types';
import PostsListStyled from './PostsListStyled';
import Post from './post/Post';

const PostsList = () => {
	return (
		<PostsListStyled>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
		</PostsListStyled>
	)
};

PostsList.propTypes = {};

PostsList.defaultProps = {};

export default PostsList;