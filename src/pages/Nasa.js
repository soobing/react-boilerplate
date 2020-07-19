

import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  & > h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  & > iframe {
    width: 100%;
    height: 400px;
  }
`

export default function Nasa({ }) {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setImgUrl(myJson.url);
        console.log('hi', myJson);
      });
  }, [])

  return <Wrapper id="nasa">
    <h1>오늘의 우주</h1>
    <iframe
      src={imgUrl}>
    </iframe>

  </Wrapper>
}

