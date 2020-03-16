import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as types from '../actions';

export default function Series(props) {
  const dispatch = useDispatch();
  const isTest = useSelector(state => state.app.isTest);
  const { history } = props;
  console.log(props)
  useEffect(() => {
    dispatch({ type: types.SERIES_MUSIC_DATA_REQUEST });
  }, [])
  return <div>
    <h1><Link to='/series/cho'>Series</Link></h1>

    {/* <h1 onClick={() => dispatch({ type: types.APP_ACTION_TEST, data: true })}>
      Redux test => {String(isTest)}
    </h1>
    <h1 onClick={() => dispatch({ type: types.APP_INIT_REQUEST, data: {} })}>
      Saga test => watch console.log
    </h1> */}
  </div>
}
