import React from 'react';
import { mount, shallow } from 'enzyme';
import { GREY_1 } from 'govuk-colours';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import DistractionFree from '.';

expect.extend(createMatchers(emotion));

describe('DistractionFree', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<DistractionFree />);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('renders children text', () => {
    const wrapper = shallow(<DistractionFree>Text</DistractionFree>);
    expect(wrapper.find('Body').childAt(0).text()).toBe('Text');
  });
  
  it('renders optional arrow title', () => {
    const wrapper = shallow(<DistractionFree arrowLeftTitle="Title">Text</DistractionFree>);
    expect(wrapper.find('ArrowLeft').childAt(0).text()).toBe('Title');
  });
  
  it('renders function passed when clicked', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(<DistractionFree onClick={clickHandler}>Text</DistractionFree>);
    wrapper.find('Button').simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it('renders style rules', () => {
    const wrapper = shallow(<DistractionFree />);
    expect(wrapper.find('Background')).toHaveStyleRule('background-color', GREY_1);
  });
  
  it('matches snapshot', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(<DistractionFree arrowLeftTitle="Title" onClick={clickHandler}>Text</DistractionFree>);
    expect(wrapper).toMatchSnapshot();
  });
});

