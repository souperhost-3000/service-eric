/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledHeader from '../client/src/app.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<StyledHeader />);

    expect(wrapper.exists()).toBe(true);
  });
});
