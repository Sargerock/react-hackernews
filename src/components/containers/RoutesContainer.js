import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import StoriesListContainer from '../storiesList/StoriesListContainer';
import { setStoriesType } from '../../actions/contentAction';

const RoutesContainer = ({ setStoriesType }) => {
	const allowedPaths = [
		"topstories",
		"newstories",
		"beststories",
		"askstories",
		"showstories",
		"jobstories",
	];

	const location = useLocation();
	const locationPathName = location.pathname.slice(1);

	useEffect(() => {
		if (allowedPaths.includes(locationPathName)) {
			setStoriesType(locationPathName);
		}
	}, [location]);



	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/topstories"/>
			</Route>
			{
				allowedPaths.includes(locationPathName) ?
					<Route to="/:storiesType" >
						<StoriesListContainer/>
					</Route> :
					<Redirect to="/topstories"/>
			}
		</Switch>
	)
};

RoutesContainer.propTypes = {};

RoutesContainer.defaultProps = {};

export default connect( null , { setStoriesType })(RoutesContainer);