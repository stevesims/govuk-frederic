import React from 'react';
import { mount, shallow } from 'enzyme';

import Count from '.';

describe('Count', () => {
  it('renders with only required props', () => {
    const wrapper = shallow(<Count value={2} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays number passed in correctly', () => {
    const wrapper = shallow(<Count value={4} />);
    expect(wrapper.find('span').text()).toBe('4');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Count value={6} />);
    expect(wrapper).toMatchSnapshot();
  });
});
