import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('ResultCountTitle', () => {
  let wrapper;

  it('renders with expected style rule', () => {
    wrapper = shallow(<Component count="000">Sample title</Component>);
    expect(wrapper).toHaveStyleRule('display', 'inline-block');
  });

  it('renders with count', () => {
    expect(wrapper.find('ResultCount').childAt(0).text()).toBe('000');
  });

  it('renders with title', () => {
    expect(wrapper.find('Title').childAt(0).text()).toBe('Sample title');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
