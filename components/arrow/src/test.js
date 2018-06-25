import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('Arrow', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Component />);
  });

  it('sets fill color on polygon', () => {
    wrapper = shallow(<Component fill="red" />);
    expect(wrapper.find('polygon[fill="red"]').length).toBe(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
