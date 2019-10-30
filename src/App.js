import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import Header from './components/header/Header';
import StoriesListContainer from './components/storiesList/StoriesListContainer';
import store from './store/store';

import { GlobalStyle } from './styles';
import RoutesContainer from './components/containers/RoutesContainer';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle/>
				<div>
					<Header/>
					{/*<Route path="/:storiesType">*/}
					{/*	<StoriesListContainer/>*/}
					{/*</Route>*/}
					<RoutesContainer/>
				</div>
			</BrowserRouter>
		</Provider>

	);
}

export default App;
