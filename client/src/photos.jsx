/* eslint-disable import/extensions */
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

const StyledHeader = styled.h1`
  font: Montserrat;
  font-weight: lighter;
`;

const StyledImg = styled.img`
  width: 20px;
  height: 20px;
`;

function Photos({ imageData, viewable, setViewable }) {
  if (viewable) {
    return null;
  }
  return (
    <MainPhotoDiv>
      <StyledHeader>Luxury lodge with incredible views of Lake Washington</StyledHeader>
      <span>
        <StyledImg src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="rating star image" />
      </span>
      <span>4.87</span>
      <br />
      <MainImage onClick={() => setViewable(true)} src={imageData.images[10]} alt="" />
      <SmallImageTop onClick={() => setViewable(true)} src={imageData.images[11]} alt="" />
      <SmallImageTop onClick={() => setViewable(true)} src={imageData.images[12]} alt="" />
      <SmallImageBottom onClick={() => setViewable(true)} src={imageData.images[13]} alt="" />
      <SmallImageBottom onClick={() => setViewable(true)} src={imageData.images[14]} alt="" />
    </MainPhotoDiv>
  );
}

export default Photos;
