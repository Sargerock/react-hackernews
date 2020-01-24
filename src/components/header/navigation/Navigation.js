import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationStyled from './NavigationStyled';

const Navigation = () => {
	const storiesTypes = [
		"Top",
		"New",
		"Best",
		"Ask",
		"Show",
		"Job",
	];

	const getFullType = type => type.toLowerCase() + "stories";

	const mapStoriesTypes = storiesTypes.map((type, i) => {
		return <NavLink
			className="nav-link"
			to={`/${getFullType(type)}`}
			key={i}
		>
			{type}
		</NavLink>
	});

	return (
		<NavigationStyled>
			{mapStoriesTypes}
		</NavigationStyled>
	)
};

export default Navigation;