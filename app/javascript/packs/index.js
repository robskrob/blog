import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import Components from './components/';
import Containers from './containers/';
import store from './store';

const history = createBrowserHistory();

ReactDOM.render(
  (<Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Containers.Home} />
        <Route exact path='/write-post' component={Components.WritePost} />
      </Switch>
    </Router>
  </Provider>), document.body.appendChild(document.createElement('div'))
);
