import React from 'react'
import {Router, Route} from 'react-router'

import App from './components/app'
import Home from './components/home'
import Goodbye from './components/goodbye'

export default (
  <Route handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="goodbye" path="/goodbye" handler={Goodbye} />
  </Route>
)
