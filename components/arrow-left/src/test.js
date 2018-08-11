import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import ArrowLeft from '.';

expect.extend(createMatchers(emotion));

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
    const wrapper = shallow(<ArrowLeft color="purple" />);
    expect(wrapper).toHaveStyleRule('color', 'purple');
  });

  it('supports no setting of color', () => {
    const wrapper = shallow(<ArrowLeft/>);
    expect(wrapper).not.toHaveStyleRule('color', 'purple');
  });
  
  it('matches snapshot', () => {
    const wrapper = mount(<ArrowLeft fill="red" color="purple">Title</ArrowLeft>);
    expect(wrapper).toMatchSnapshot();
  });
});
