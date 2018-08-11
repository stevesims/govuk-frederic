import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import TitleResultCount from '.';

expect.extend(createMatchers(emotion));

describe('TitleResultCount', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TitleResultCount />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a title', () => {
    const wrapper = shallow(<TitleResultCount>Title</TitleResultCount>);
    expect(
      wrapper
        .find('Title')
        .childAt(0)
        .text(),
    ).toBe('Title');
  });

  it('renders with a count', () => {
    const wrapper = shallow(<TitleResultCount count="3" />);
    expect(
      wrapper
        .find('ResultCount')
        .childAt(0)
        .text(),
    ).toBe('3');
  });
  
  it('matches snapshot', () => {
    const wrapper = mount(<TitleResultCount count="3">Title</TitleResultCount>);
    expect(wrapper).toMatchSnapshot();
  });
});
