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
import Nasa from './pages/Nasa';

const Wrapper = styled.div`
  max-width: 600px;
  min-height: 100vh;
  background-color: #fbfbfb;
  margin: auto;
`
const TabItem = styled.div`
  background: #ff6100;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  & > a {
    color: white;
    text-decoration: none;
  }
`
const Tab = styled.div`
  display: flex;
  flex-direction: row;
  & > ${TabItem} + ${TabItem} {
    margin-left: 5px;
  }
  border-bottom: 1px solid #ff6100;
  width: fit-content;
  margin-left: auto;
  margin-top: 10px;
`
export default function App() {
  return <Router>
    <Wrapper>
      <Tab>
        <TabItem><Link to="/">todo</Link></TabItem>
        <TabItem><Link to="/nasa">nasa</Link></TabItem>
      </Tab>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/nasa" component={Nasa} />
        <Redirect path="*" to="/" />
      </Switch>
    </Wrapper>
  </Router >
}

