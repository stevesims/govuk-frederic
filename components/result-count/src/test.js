import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('ResultCount', () => {
  let wrapper;

  it('renders with expected style rule', () => {
    wrapper = shallow(<Component />);
    expect(wrapper).toHaveStyleRule('line-height', '1.25');
  });

  it('renders with count', () => {
    wrapper = shallow(<Component>000</Component>);
    expect(wrapper.childAt(0).text()).toBe('000');
  });

  it('applies style rules according to props', () => {
    wrapper = shallow(<Component color="blue" backgroundColor="yellow">000</Component>);
    expect(wrapper).toHaveStyleRule('color', 'blue');
    expect(wrapper).toHaveStyleRule('background', 'yellow');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

