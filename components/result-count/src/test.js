import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import ResultCount from '.';

expect.extend(createMatchers(emotion));

describe('ResultCount', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ResultCount />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with count', () => {
    const wrapper = shallow(<ResultCount>000</ResultCount>);
    expect(wrapper.childAt(0).text()).toBe('000');
  });

  describe('applies styles in response to props', () => {
    it('sets color from prop', () => {
      const wrapper = shallow(<ResultCount color="blue">000</ResultCount>);
      expect(wrapper).toHaveStyleRule('color', 'blue');
    });

    it('sets background from prop', () => {
      const wrapper = shallow(<ResultCount backgroundColor="yellow">000</ResultCount>);
      expect(wrapper).toHaveStyleRule('background', 'yellow');
    });
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ResultCount>0</ResultCount>);
    expect(wrapper).toMatchSnapshot();
  });
});

