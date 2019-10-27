import styled from 'styled-components';
import PropTypes from "prop-types";

const InputStyled = styled.input`
	border-radius: 3px;
	border: 1px solid lightgray;
	height: 30px;
	width: ${props => props.width}px;
	
	::-webkit-input-placeholder {
		padding-left: 10px;
	}
	:-ms-input-placeholder {
		padding-left: 10px;
	}
	::placeholder {
		padding-left: 10px;
	}
`;

InputStyled.propTypes = {
	width: PropTypes.number,
	type: PropTypes.string
};

InputStyled.defaultProps = {
	width: 300,
	type: 'text'
};

export default InputStyled;