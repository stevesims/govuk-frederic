import React from 'react';
import { mount } from 'enzyme';

import ResultCountTitle from '.';

describe('ResultCountTitle', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<ResultCountTitle />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with count', () => {
    const wrapper = mount(<ResultCountTitle count="000" />);
    expect(wrapper.text()).toContain('000');
  });

  it('renders with title', () => {
    const wrapper = mount(<ResultCountTitle>Title</ResultCountTitle>);
    expect(wrapper.text()).toContain('Title');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ResultCountTitle count="000">Title</ResultCountTitle>);
    expect(wrapper).toMatchSnapshot();
  });
});
