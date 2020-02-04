import React from 'react';

import MenuStyled from './MenuStyled';

const Menu = ({ visible, setVisibility }) => {
	const onClick = () => {
		setVisibility(!visible);
	};
	return (
		<MenuStyled onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</MenuStyled>
	);
};

export default Menu;
