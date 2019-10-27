import React from 'react';
import {NavLink} from 'react-router-dom';

import NavigationStyled from './NavigationStyled';

const Navigation = () => {
	return (
		<NavigationStyled>
			<NavLink className='nav-link' to='/new'>New</NavLink>
			<NavLink className='nav-link' to='/past'>Past</NavLink>
			<NavLink className='nav-link' to='/ask'>Ask</NavLink>
		</NavigationStyled>
	)
};

export default Navigation;