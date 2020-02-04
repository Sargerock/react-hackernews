import React, { useState } from 'react';

import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import Search from './search/Search';
import Menu from './menu/Menu';

import HeaderStyled from './HeaderStyled';
import logo from '../../assets/logo.jpg';

const Header = () => {
	const [isNavigationVisible, setNavigationVisibility] = useState(false);
	return (
		<HeaderStyled>
			<Logo url={logo} title={'Hackernews'} />
			<Search />
			<Navigation visible={isNavigationVisible} />
			<Menu
				visible={isNavigationVisible}
				setVisibility={setNavigationVisibility}
			/>
		</HeaderStyled>
	);
};

export default Header;
