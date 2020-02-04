import { connect } from 'react-redux';
import Comment from './CommentComponent';

const mapStateToProps = (state, props) => {
	if (!state.content.comments[props.id]) return {};
	const { text, kids, by, time, deleted } = state.content.comments[props.id];
	return {
		deleted,
		text,
		kids,
		by,
		time,
	};
};

export default connect(mapStateToProps)(Comment);
