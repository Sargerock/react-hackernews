import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'

import Header from './components/header/Header';
import PostsList from './components/postsList/PostsList';
import store from './store/store';

import {GlobalStyle} from './styles';

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle/>
            <div>
              <Header/>
              <PostsList/>
            </div>
        </BrowserRouter>
      </Provider>

  );
}

export default App;
