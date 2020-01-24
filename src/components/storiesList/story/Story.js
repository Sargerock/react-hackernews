import React from 'react';
import StoryStyled from './StoryStyled';

const Story = ({story}) => {
	const {title, type, by, time, score, url, descendants} = story;

	return (
		<StoryStyled>
			<div>
				<span className="post-reputation">{score}</span>
				<span className="post-info">
                    {type} posted by {by} {time}
                </span>
			</div>
			<div className='post-body'>
				<a href={url || ""} target="_blank" rel="noopener noreferrer">{title}</a>
			</div>
			<div>
				<a href="#void" className='post-btn-comment'>
					{/*<FontAwesomeIcon icon={faComment} className='mr-5'/>*/}
					{descendants} comments
				</a>
				<a href="#void" className='post-btn-comment'>
					{/*<FontAwesomeIcon icon={faHashtag} className='mr-5'/>*/}
					{"youtube.com"}
				</a>

			</div>
		</StoryStyled>
	)
};

Story.propTypes = {};

Story.defaultProps = {};

export default Story;