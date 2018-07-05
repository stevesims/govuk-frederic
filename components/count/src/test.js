import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('Count', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Component value={4} />);
  });

  it('displays number passed in correctly', () => {
    expect(wrapper.find('span').text()).toBe('4');
  });
  
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
