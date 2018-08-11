import React from 'react';
import { mount, shallow } from 'enzyme';

import Arrow from '.';

describe('Arrow', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Arrow />);
    expect(wrapper.exists()).toBe(true);
  });

  it('sets fill color on polygon', () => {
    const wrapper = shallow(<Arrow fill="red" />);
    expect(wrapper.find('polygon[fill="red"]').length).toBe(1);
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Arrow fill="red" />);
    expect(wrapper).toMatchSnapshot();
  });
});
