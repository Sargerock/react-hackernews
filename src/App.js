import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/header/Header';
import StoriesListContainer from './components/storiesList/StoriesListContainer';
import store from './store/store';
import { storyTypes } from './constants/contentConstant';

import { GlobalStyle } from './styles';
import CommentsListContainer from './components/commentsList/CommentsListContainer';

function App() {
	const mapTypesToRoutes = Object.getOwnPropertyNames(storyTypes).map(key => {
		return (
			<Route path={`/${storyTypes[key]}`} key={`route${key}`}>
				<StoriesListContainer storyType={storyTypes[key]} />
			</Route>
		);
	});
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<div>
					<Header />
					<Switch>
						{mapTypesToRoutes}
						<Route path="/comments/:id">
							<CommentsListContainer />
						</Route>
						<Route path="/">
							<Redirect to="/topstories" />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
