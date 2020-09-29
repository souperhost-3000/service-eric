import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
width: 484px;
height: 505px;
padding: 10px;
float: left;
`;

const SmallImageTop = styled.img`
width: 234px;
height: 242px;
padding: 10px;
float: left;
`;

const SmallImageBottom = styled.img`
width: 234px;
height: 242px;
padding: 10px;
float: bottom;
`;

const MainPhotoDiv = styled.div`
height: 600px;
width: 1120px;
`;

function photos({ imageData }) {
  return (
    <MainPhotoDiv>
      <MainImage src={imageData.images[10]} alt="" />
      <SmallImageTop src={imageData.images[11]} alt="" />
      <SmallImageTop src={imageData.images[12]} alt="" />
      <SmallImageBottom src={imageData.images[13]} alt="" />
      <SmallImageBottom src={imageData.images[14]} alt="" />
    </MainPhotoDiv>
  );
}

export default photos;
