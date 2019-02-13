import React from 'react';
import { mount } from 'enzyme';

import ResultCount from '.';

describe('ResultCount', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<ResultCount />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with count', () => {
    const wrapper = mount(<ResultCount>000</ResultCount>);
    expect(wrapper.childAt(0).text()).toBe('000');
  });

  describe('applies styles in response to props', () => {
    it('sets color from prop', () => {
      const wrapper = mount(<ResultCount color="blue">000</ResultCount>);
      expect(wrapper).toHaveStyleRule('color', 'blue');
    });

    it('sets background from prop', () => {
      const wrapper = mount(<ResultCount backgroundColor="yellow">000</ResultCount>);
      expect(wrapper).toHaveStyleRule('background', 'yellow');
    });
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ResultCount>0</ResultCount>);
    expect(wrapper).toMatchSnapshot();
  });
});
