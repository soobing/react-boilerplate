import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Series from './pages/Series';
import Cho from './pages/Cho';
import Music from './pages/Music';
import List from './pages/List';
import Login from './pages/Login';

export default function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/series/cho/music/list" component={List} />
      <Route path="/series/cho/music" component={Music} />
      <Route path="/series/cho" component={Cho} />
      <Route path="/series" component={Series} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router >
}

