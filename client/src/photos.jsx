import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function photos({ imageData }) {
  return (
    <div>
      <img src={imageData.images[12]} alt="" />
    </div>
  );
}

export default photos;
