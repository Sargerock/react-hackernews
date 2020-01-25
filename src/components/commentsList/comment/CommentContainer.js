import { connect } from 'react-redux';
import Comment from './CommentComponent';

const mapStateToProps = (state, props) => {
	if (!state.content.comments[props.id]) return {};
	const { text, kids, by, time } = state.content.comments[props.id];
	return {
		text,
		kids,
		by,
		time,
	};
};

export default connect(mapStateToProps)(Comment);
