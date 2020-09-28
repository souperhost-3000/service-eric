/* eslint-disable react/no-unused-state */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font: Montserrat;
  font-weight: lighter;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageData: [],
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.getImages(1);
  }

  getImages(listingId) {
    axios.get(`/api/images/${listingId}`).then((data) => {
      this.setState({ imageData: data });
    }).catch((err) => {
      console.log('Error getting image data', err);
    });
  }

  render() {
    return (
      <StyledHeader>Hello from React!</StyledHeader>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
