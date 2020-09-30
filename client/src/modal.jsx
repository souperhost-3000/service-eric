import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
width: 100%;
height; 100%;
`;

const CarouselImage = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 65%;
padding-top: 100px;
`;

const LeftButton = styled.button`
& {
display: inline-block;
width: 4em;
height: 4em;
border: 0.3em solid #333;
border-radius: 50%;
margin-right: 1.5em;
position: absolute;
margin-top: 40%;
background-color: white;
}

&:after {
content: '';
display: inline-block;
margin-top: 0.2em;
margin-left: 0.6em;
width: .5em;
height: .5em;
border-top: 0.3em solid #333;
border-right: 0.3em solid #333;
transform: rotate(-135deg);
}
`;

const RightButton = styled.button`
& {
display: inline-block;
width: 4em;
height: 4em;
border: 0.3em solid #333;
border-radius: 50%;
margin-left: 95%;
position: absolute;
margin-top: 40%;
background-color: white;
}

&:after {
content: '';
display: inline-block;
margin-top: 0.2em;
margin-left: -0.6em;
width: .5em;
height: .5em;
border-top: 0.3em solid #333;
border-right: 0.3em solid #333;
transform: rotate(45deg);
}
`;
function Modal({ viewable, setViewable, imageData }) {
  if (!viewable) {
    return null;
  }

  return (
    <ModalDiv>
      <LeftButton />
      <RightButton />
      <CarouselImage src={imageData.images[10]} alt="" />
    </ModalDiv>
  );
}

export default Modal;
