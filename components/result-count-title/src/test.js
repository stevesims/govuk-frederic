import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import ResultCountTitle from '.';

expect.extend(createMatchers(emotion));

describe('ResultCountTitle', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ResultCountTitle />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with count', () => {
    const wrapper = shallow(<ResultCountTitle count="000" />);
    expect(wrapper.find('ResultCount').childAt(0).text()).toBe('000');
  });

  it('renders with title', () => {
    const wrapper = shallow(<ResultCountTitle>Title</ResultCountTitle>);
    expect(wrapper.find('Title').childAt(0).text()).toBe('Title');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ResultCountTitle count="000">Title</ResultCountTitle>);
    expect(wrapper).toMatchSnapshot();
  });
});
