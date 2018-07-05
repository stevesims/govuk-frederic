import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('ArrowLeft', () => {
  let wrapper;
  
  it('renders without crashing', () => {
    wrapper = shallow(<Component />);
  });

  it('renders with a title', () => {
    wrapper = shallow(<Component>Example title</Component>);
    expect(wrapper.find('title').text()).toBe('Example title');
  });

  it('renders with a colour fill', () => {
    wrapper = shallow(<Component fill="red" />);
    expect(wrapper.find('svg[fill="red"]').length).toBe(1);
  });

  it('supports setting of no color', () => {
    expect(wrapper).not.toHaveStyleRule('color', 'purple');
  });

  it('supports setting of color', () => {
    wrapper = shallow(<Component color="purple" />);
    expect(wrapper).toHaveStyleRule('color', 'purple');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
