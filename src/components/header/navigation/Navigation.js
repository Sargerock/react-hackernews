import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import NavigationStyled from './NavigationStyled';

const Navigation = () => {
	const { storiesType } = useParams();
	const storiesTypes = [
		"Top",
		"New",
		"Best",
		"Ask",
		"Show",
		"Job",
	];

	const getFullType = type => type.toLowerCase() + "stories";

	const isActive = type => getFullType(type) === storiesType;

	const mapStoriesTypes = storiesTypes.map((type, i) => {
		return <NavLink
			className="nav-link"
			isActive={isActive(type)}
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