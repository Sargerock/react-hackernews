import React from 'react';

import Logo from "./logo/Logo";
import Navigation from './navigation/Navigation';
import Search from './search/Search';
import Menu from './menu/Menu';

import HeaderStyled from './HeaderStyled';
import logo from '../../assets/logo.jpg';

const Header = () => {
	return (
		<HeaderStyled>
			<Logo url={logo} title={"Hackernews"}/>
			<Search/>
			<Navigation/>
			<Menu/>
		</HeaderStyled>
	)
};

export default Header;