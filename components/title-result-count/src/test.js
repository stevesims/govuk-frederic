import React from 'react';
import { mount } from 'enzyme';

import TitleResultCount from '.';

describe('TitleResultCount', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<TitleResultCount />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a title', () => {
    const wrapper = mount(<TitleResultCount>Title</TitleResultCount>);
    expect(wrapper.text()).toContain('Title');
  });

  it('renders with a count', () => {
    const wrapper = mount(<TitleResultCount count="3" />);
    expect(wrapper.text()).toContain('3');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<TitleResultCount count="3">Title</TitleResultCount>);
    expect(wrapper).toMatchSnapshot();
  });
});
