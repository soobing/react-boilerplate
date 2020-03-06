import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as types from './actions';

export default function App() {
  const dispatch = useDispatch();
  const isTest = useSelector(state => state.app.isTest);
  return <div>
    <h1 onClick={() => dispatch({ type: types.APP_ACTION_TEST, data: true })}>
      Redux test => {String(isTest)}
    </h1>
    <h1 onClick={() => dispatch({ type: types.APP_INIT_REQUEST, data: {} })}>
      Saga test => watch console.log
    </h1>
  </div>
}

