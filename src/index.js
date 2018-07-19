import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Route, Router, Switch} from 'react-router'

import createBrowserHistory from './history'

import configureStore from './store/configureStore'

import MainContainer from './containers/MainContainer'
import DetailsContainer from './containers/DetailsContainer'

import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/:id' component={DetailsContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)