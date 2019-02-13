import React from 'react';
import { mount, shallow } from 'enzyme';

import ArrowLeft from '.';

describe('ArrowLeft', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ArrowLeft />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with a title', () => {
    const wrapper = shallow(<ArrowLeft>Title</ArrowLeft>);
    expect(wrapper.find('title').text()).toBe('Title');
  });

  it('renders with a colour fill', () => {
    const wrapper = shallow(<ArrowLeft fill="red" />);
    expect(wrapper.find('svg[fill="red"]').length).toBe(1);
  });

  it('supports setting of color', () => {
    const wrapper = mount(<ArrowLeft color="purple" />);
    expect(wrapper).toHaveStyleRule('color', 'purple');
  });

  it('supports no setting of color', () => {
    const wrapper = mount(<ArrowLeft />);
    expect(wrapper).not.toHaveStyleRule('color', 'purple');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ArrowLeft fill="red" color="purple">Title</ArrowLeft>);
    expect(wrapper).toMatchSnapshot();
  });
});
