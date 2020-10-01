/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
width: 484px;
height: 505px;
padding: 4px;
float: left;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
cursor: pointer;

&:hover {
filter: brightness(90%);
transition: .2s;
}
`;

const SmallImageTop = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: left;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const SmallImageTopRight = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: left;
border-top-right-radius: 20px;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const SmallImageBottom = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: bottom;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const SmallImageBottomRight = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: bottom;
border-bottom-right-radius: 20px;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const MainPhotoDiv = styled.div`
height: 600px;
width: 1120px;
margin-left: auto;
margin-right: auto;
`;

const StyledHeader = styled.h1`
  font: Montserrat;
  font-weight: lighter;
`;

const StyledImg = styled.img`  
width: 15px;
height: 15px;
padding-right: .4em;
`;

const StyledSpan = styled.span`
font-size: 16px;
font: Montserrat;
`;

const ShowAllPhotosButton = styled.button`
cursor: pointer;
border: none;
border-radius: 10%;
background: none;
background-color: white;
position: absolute;
padding: 10px 20px 10px 20px;
font-size: 14px;
left: 38px;
top: 30px;
outline: none;
margin-left: 1200px;
margin-top:  500px;

&:hover {
filter: brightness(90%);
transition: .2s;
}
`;

function Photos({ imageData, viewable, setViewable, current, setCurrent}) {
  if (viewable) {
    return null;
  }
  return (
    <MainPhotoDiv>
      <StyledHeader>Luxury lodge with incredible views of Lake Washington</StyledHeader>
      <span>
        <StyledImg src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="rating star image" />
      </span>
      <StyledSpan>4.87</StyledSpan>
      <br />
      <MainImage onClick={() => { setViewable(true); setCurrent(0); }} src={imageData.images[0]} alt="" />
      <SmallImageTop onClick={() => { setViewable(true); setCurrent(1); }} src={imageData.images[1]} alt="" />
      <SmallImageTopRight onClick={() => { setViewable(true); setCurrent(2); }} src={imageData.images[2]} alt="" />
      <SmallImageBottom onClick={() => { setViewable(true); setCurrent(3); }} src={imageData.images[3]} alt="" />
      <SmallImageBottomRight onClick={() => { setViewable(true); setCurrent(4); }} src={imageData.images[4]} alt="" />
    </MainPhotoDiv>
  );
}

export default Photos;
