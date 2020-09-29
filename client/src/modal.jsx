import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
width: 100%;
height; 100%;
`;
function Modal({ viewable, setViewable }) {
  if (!viewable) {
    return null;
  }

  return (
    <ModalDiv>
      Hello from Modal
    </ModalDiv>
  );
}

export default Modal;
