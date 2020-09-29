import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function photos(props) {
  console.log('props', props);
  const { images } = props.imageData;
  return (
    <div>
      <img src={images[12]} alt="" />
    </div>
  );
}

export default photos;
