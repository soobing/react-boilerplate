import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as types from './actions';

export default function App() {
  const dispatch = useDispatch();
  const isTest = useSelector(state => state.app.isTest);
  console.log(isTest)
  return <h1 onClick={() => dispatch({ type: types.APP_ACTION_TEST, data: true })}>Hello Soobing World! => {String(isTest)}</h1>
}

