import React from 'react';

import Div from './LoaderStyled';
import loader from '../../../assets/preloader.svg';

const Loader = () => {
	return (
		<Div>
			<img src={loader} alt="loading" />
		</Div>
	);
};

export default Loader;
