import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoStyled = styled.span`
	display: flex;
	align-items: center;
	
	img {
		height: ${props => props.size}px;
        width: ${props => props.size}px;
        border-radius: 50%;
        margin: 5px;
	}
	
	span {
		font-size: ${props => props.size * 0.75}px;
		font-weight: bold;
	}
	
	@media(max-width: 768px) {
		span {
			display: none;
		}
    }
`;

LogoStyled.propTypes = {
	size: PropTypes.number
};

LogoStyled.defaultProps = {
	size: 40
};

export default LogoStyled;