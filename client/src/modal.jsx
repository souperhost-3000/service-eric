import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
width: 1200px;
height; 1200px;
margin-left: auto;
margin-right: auto;
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
border: 0.2em solid #ccc;
border-radius: 50%;
margin-right: 1.5em;
position: absolute;
margin-top: 500px;
background-color: white;
outline: none;
}

&:after {
content: '';
display: inline-block;
margin-top: 0.2em;
margin-left: 0.6em;
width: .7em;
height: .7em;
border-top: 0.2em solid;
border-right: 0.2em solid;
transform: rotate(-135deg);
}
`;

const RightButton = styled.button`
& {
display: inline-block;
width: 4em;
height: 4em;
border: 0.2em solid #ccc;
border-radius: 50%;
margin-left: 85em;
position: absolute;
margin-top: 500px;
background-color: white;
outline: none;
}

&:after {
content: '';
display: inline-block;
margin-top: 0.2em;
margin-left: -0.6em;
width: .7em;
height: .7em;
border-top: 0.2em solid;
border-right: 0.2em solid;
transform: rotate(45deg);
}
`;

const CloseButton = styled.button`
cursor: pointer;
border: none;
border-radius: 10%;
background: none;
background-color: #ccc;
position: absolute;
padding: 10px 20px 10px 20px;
font-size: 14px;
left: 38px;
top: 30px;
outline: none;
margin-left: 10em;
`;

const CounterButton = styled.button`
font-size: 16px;
font: Montserrat;
font-weight: lighter;
color: gray;
border: none;
margin-left: 35em;
margin-top: 2em;
background: white;
`;

const DescriptionDiv = styled.div`
font-size: 20px;
font: Montserrat;
margin-left: 19em;
margin-top: 1em;
`;
function Modal({ viewable, setViewable, imageData, current, setCurrent }) {
  if (!viewable) {
    return null;
  }
  return (
    <ModalDiv>
      <CloseButton onClick={() => setViewable(!viewable)}>X Close </CloseButton>
      <LeftButton onClick={() => setCurrent(current === 1 ? 20 : current - 1)} />
      <RightButton onClick={() => setCurrent(current === 20 ? 1 : current + 1)} />
      <CounterButton>
        {`${current}`} / {imageData.images.length}
      </CounterButton>
      <CarouselImage src={imageData.images[current - 1]} alt="" />
      <DescriptionDiv>
        {imageData.descriptions[current - 1]}
      </DescriptionDiv>
    </ModalDiv>
  );
}

export default Modal;
