import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { LINK_COLOUR, WHITE } from 'govuk-colours';

import Component from '.';

expect.extend(createMatchers(emotion));

const testCounters = [
  { id: 'abc', name: 'abc', score: 1 },
  { id: 'def', name: 'def', score: 3 },
  { id: 'ghi', me: 'ghi' },
  { id: 'jlk', name: '', score: 0 },
];

const testActiveCounters = [
  { active: true, id: 'abc', name: 'abc', score: 1 },
  { id: 'def', name: 'def', score: 3 },
];

const testDisabledCounters = [
  { id: 'def', name: 'def', score: 0 },
];

describe('CounterBar', () => {
  let wrapper;
  const handleChange = jest.fn();
  
  it('renders counters without active title', () => {
    wrapper = shallow(<Component counters={testCounters} name="test" listTitle="Test Title" />);
    const countWrapper = wrapper.find('CountWrapper');
    expect(countWrapper).not.toHaveStyleRule('background', LINK_COLOUR);
    expect(countWrapper).not.toHaveStyleRule('color', WHITE);
    expect(countWrapper).not.toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  it('renders empty counters', () => {
    expect(wrapper.find('Counter').at(2)).toHaveStyleRule('opacity', '0');
  });
    
  it('renders counters with active title', () => {
    wrapper = mount(<Component counters={testCounters} name="test" listTitle="Test Title" activeTitle />);
    const countWrapper = wrapper.find('CountWrapper');
    expect(countWrapper).toHaveStyleRule('background', LINK_COLOUR);
    expect(countWrapper).toHaveStyleRule('color', WHITE);
    expect(countWrapper).toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  it('renders default props as expected', () => {
    expect(typeof wrapper.prop('onSelect') === 'function').toBe(true);
    wrapper.prop('onSelect')();
  });

  it('renders counters with disabled counter values', () => {
    wrapper = shallow(<Component counters={testDisabledCounters} name="test" listTitle="Test Title" />);
    const counterWrapper = wrapper.find('Counter').first();
    expect(counterWrapper.prop('disabled')).toBe(true);
  });
  
  it('renders counters with active values', () => {
    wrapper = shallow(<Component counters={testActiveCounters} name="test" listTitle="Test Title" />);
    const counterWrapper = wrapper.find('Counter').first();
    expect(counterWrapper).toHaveStyleRule('background', LINK_COLOUR);
    expect(counterWrapper).toHaveStyleRule('color', WHITE);
    expect(counterWrapper).toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });
  
  it('calls onSelect ID when CountWrapper is clicked', () => {
    wrapper.setProps({ onSelect: handleChange }).find('CountWrapper').simulate('click');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls onSelect with expected ID when clicked', () => {
    handleChange.mockReset();
    wrapper.find('Counter').first().simulate('click');
    expect(handleChange).toHaveBeenCalledWith(testActiveCounters[0].id);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
