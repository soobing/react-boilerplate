import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Series from './components/Series';
import Cho from './components/Cho';
import Music from './components/Music';
import List from './components/List';
import Login from './components/Login';
export default function App() {
  return <Router>
    <Switch>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/series">
        <Series />
      </Route>
      <Route path="/series/cho">
        <Cho />
      </Route>
      <Route path="/series/cho/music">
        <Music />
      </Route>
      <Route path="/series/cho/music/list">
        <List />
      </Route>
    </Switch>
  </Router>
}

