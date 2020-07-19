import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'

import Series from './pages/Series';
import Cho from './pages/Cho';
import Music from './pages/Music';
import List from './pages/List';
import Login from './pages/Login';

const Wrapper = styled.div`
  max-width: 600px;
  background-color: #f5f5f5;
  margin: auto;
`
export default function App() {
  return <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/series/cho/music/list" component={List} />
        <Route path="/series/cho/music" component={Music} />
        <Route path="/series/cho" component={Cho} />
        <Route path="/series" component={Series} />
        <Redirect path="*" to="/" />
      </Switch>
    </Wrapper>
  </Router >
}

