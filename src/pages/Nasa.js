

import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

export default function Nasa({ }) {
  console.log(process.env.NASA_API_KEY)

  return <Wrapper>
    Nasa
  </Wrapper>
}

