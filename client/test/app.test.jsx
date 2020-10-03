/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app.jsx';

describe('App component', () => {
  const wrapper = shallow(<App />);
  it('should render App component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
