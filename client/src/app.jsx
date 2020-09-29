/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Photos from './photos.jsx';

const StyledHeader = styled.h1`
  font: Montserrat;
  font-weight: lighter;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

function App() {
  const [imageData, setImageData] = useState({ images: ['https://fec-airbnb-images.s3-us-west-2.amazonaws.com/image_53.jpg'] });

  // eslint-disable-next-line camelcase
  function getImages(listingId) {
    axios.get(`/api/images/${listingId}`)
      .then(({ data }) => { setImageData(data); })
      .catch((err) => { console.log('Error getting image data', err); });
  }

  useEffect(() => {
    getImages(5);
  }, []);

  return (
    <div>
      <StyledHeader>Luxury lodge with incredible views of Lake Washington</StyledHeader>
      <span>
        <StyledImg src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="rating star image" />
      </span>
      <span>4.87</span>

      <div>
        <br />
        <Photos imageData={imageData} />
      </div>

    </div>
  );
}

export default App;
