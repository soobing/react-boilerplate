import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default function Login(props) {
  console.log(props)
  return <div>
    <h1><Link to='/series'>Login</Link></h1>
  </div>
}
