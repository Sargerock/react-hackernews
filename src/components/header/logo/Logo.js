import React from 'react';
import PropTypes from 'prop-types';

import LogoStyled from './LogoStyled';

const Logo = ({url, title, size}) => {
	return(
		<LogoStyled size={size} >
			<img src={url} alt='logo'/>
			<span>{title}</span>
		</LogoStyled>
	)
};

Logo.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	size: PropTypes.number
};

Logo.defaultProps = {
	size: 40
};

export default Logo;