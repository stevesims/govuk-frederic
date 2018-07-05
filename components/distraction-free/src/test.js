import React from 'react';
import { shallow } from 'enzyme';
import { GREY_1 } from 'govuk-colours';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('DistractionFree', () => {
  let wrapper;
  const clickHandler = jest.fn();  
  
  it('renders without crashing', () => {
    wrapper = shallow(<Component arrowLeftTitle="Sample title" onClick={clickHandler}>Sample text</Component>);
  });
  
  it('renders children text', () => {
    expect(wrapper.find('Body').childAt(0).text()).toBe('Sample text');
  });
  
  it('renders optional arrow title', () => {
    expect(wrapper.find('ArrowLeft').childAt(0).text()).toBe('Sample title');
  });
  
  it('renders function passed when clicked', () => {
    wrapper.find('Button').simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it('renders style rules', () => {
    expect(wrapper.find('Background')).toHaveStyleRule('background-color', GREY_1);
  });
  
  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

