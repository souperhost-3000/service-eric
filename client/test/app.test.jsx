/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app.jsx';
import Photos from '../src/photos.jsx';
import Modal from '../src/photos.jsx';

//Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  const wrapper = shallow(<App />);
  it('should render App component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
