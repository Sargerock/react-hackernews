import React from 'react';
import PropTypes from 'prop-types';
import PostStyled from './PostStyled';

const Post = () => {
	return (
		<PostStyled>
			<div>
				<span className="post-reputation">{123}</span>
				<span className="post-info">
                    {"story"} posted by {"Alex"} {"2 days ago"}
                </span>
			</div>
			<div className='post-body'>
				<a href={"fdsfdsf"}>{"dfsdfdsfds sdfds f dsfdsf"}</a>
			</div>
			<div>
				<a href="#void" className='post-btn-comment'>
					{/*<FontAwesomeIcon icon={faComment} className='mr-5'/>*/}
					{132} comments
				</a>
				<a href="#void" className='post-btn-comment'>
					{/*<FontAwesomeIcon icon={faHashtag} className='mr-5'/>*/}
					{"youtube.com"}
				</a>

			</div>
		</PostStyled>
	)
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;