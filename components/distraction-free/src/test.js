import React from 'react';
import { mount } from 'enzyme';
import { GREY_1 } from 'govuk-colours';

import DistractionFree from '.';

describe('DistractionFree', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<DistractionFree />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders children text', () => {
    const wrapper = mount(<DistractionFree>Text</DistractionFree>);
    expect(wrapper.find('article').text()).toBe('Text');
  });

  it('renders optional arrow title', () => {
    const wrapper = mount(<DistractionFree arrowLeftTitle="Title">Text</DistractionFree>);
    expect(wrapper.find('ArrowLeft').childAt(0).text()).toContain('Title');
  });

  it('renders function passed when clicked', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(<DistractionFree onClick={clickHandler}>Text</DistractionFree>);
    wrapper.find('button').simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it('renders style rules', () => {
    const wrapper = mount(<DistractionFree />);
    expect(wrapper).toHaveStyleRule('background-color', GREY_1);
  });

  it('matches snapshot', () => {
    const clickHandler = jest.fn();
    const wrapper = mount(<DistractionFree arrowLeftTitle="Title" onClick={clickHandler}>Text</DistractionFree>);
    expect(wrapper).toMatchSnapshot();
  });
});
