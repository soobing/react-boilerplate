import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'

import Todo from './pages/Todo';

const Wrapper = styled.div`
  max-width: 600px;
  min-height: 100vh;
  background-color: #fbfbfb;
  margin: auto;
`
export default function App() {
  return <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Redirect path="*" to="/" />
      </Switch>
    </Wrapper>
  </Router >
}

