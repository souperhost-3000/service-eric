/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font: Montserrat;
  font-weight: lighter;
`;

function App() {
  const [imageData, setImageData] = useState({ images: ['https://fec-airbnb-images.s3-us-west-2.amazonaws.com/image_53.jpg'] });

  // eslint-disable-next-line camelcase
  function getImages(listingId) {
    axios.get(`/api/images/${listingId}`).then(({ data }) => {
      setImageData(data);
    }).catch((err) => {
      console.log('Error getting image data', err);
    });
  }

  useEffect(() => {
    getImages(1);
  }, []);

  return (
    <div>
      <StyledHeader>{imageData.images}</StyledHeader>
    </div>
  );
}

export default App;
