import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { LINK_COLOUR, WHITE } from 'govuk-colours';

import CounterBar from '.';

expect.extend(createMatchers(emotion));

describe('CounterBar', () => {
  let wrapper;

  it('renders counters without an active total', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={1}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
        <CounterBar.Counter />
      </CounterBar.Counters>
    </CounterBar>);
    const totalWrapper = wrapper.find('Total');
    expect(totalWrapper).not.toHaveStyleRule('background', LINK_COLOUR);
    expect(totalWrapper).not.toHaveStyleRule('color', WHITE);
    expect(totalWrapper).not.toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  it('renders empty counters', () => {
    expect(wrapper.find('Counter').at(1).exists()).toBe(true);
  });
    
  it('renders counters with an active total', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={1} active>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const totalWrapper = wrapper.find('Total');
    expect(totalWrapper).toHaveStyleRule('background', LINK_COLOUR);
    expect(totalWrapper).toHaveStyleRule('color', WHITE);
    expect(totalWrapper).toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  it('renders counters with disabled values', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total active score={0}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={0}>Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const counterWrapper = wrapper.find('CounterWrapper').first();
    expect(counterWrapper.prop('disabled')).toBe(true);
  });
  
  it('renders counters with active values', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={1}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1} active>Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const counterWrapper = wrapper.find('Counter').first();
    expect(counterWrapper).toHaveStyleRule('background', LINK_COLOUR);
    expect(counterWrapper).toHaveStyleRule('color', WHITE);
    expect(counterWrapper).toHaveStyleRule('outline', `2px solid ${LINK_COLOUR}`);
  });

  it('renders custom colours on totals', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={1} scoreColor="yellow" scoreBackgroundColor="pink">All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const counterWrapper = wrapper.find('ResultCount').first();
    expect(counterWrapper).toHaveStyleRule('color', 'yellow');
    expect(counterWrapper).toHaveStyleRule('background', 'pink');
  });

  it('renders custom colours on counters', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={1}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1} scoreColor="orange" scoreBackgroundColor="blue">Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const counterWrapper = wrapper.find('ResultCount').at(1);
    expect(counterWrapper).toHaveStyleRule('background', 'blue');
    expect(counterWrapper).toHaveStyleRule('color', 'orange');
  });

  it('accepts an HTML element string for the total', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={1} component="aside">All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const totalWrapper = wrapper.find('Total');
    expect(totalWrapper.prop('component')).toBe('aside');
  });

  it('accepts a component for the total', () => {
    wrapper = mount(<HashRouter>
      <CounterBar>
        <CounterBar.Total score={1} component={Link} to="/courses?sort=name'/">All counters</CounterBar.Total>
        <CounterBar.Counters>
          <CounterBar.Counter score={1}>Counter 1</CounterBar.Counter>
        </CounterBar.Counters>
      </CounterBar>
    </HashRouter>);
    const totalWrapper = wrapper.find('Total');
    expect(totalWrapper.prop('component')).toBe(Link);
  });

  it('accepts an HTML element string for a counter', () => {
    wrapper = mount(<CounterBar>
      <CounterBar.Total score={3}>All counters</CounterBar.Total>
      <CounterBar.Counters>
        <CounterBar.Counter score={1} component="aside">Counter 1</CounterBar.Counter>
      </CounterBar.Counters>
    </CounterBar>);
    const counterWrapper = wrapper.find('Counter').first();
    expect(counterWrapper.prop('component')).toBe('aside');
  });

  it('accepts a component for a counter', () => {
    wrapper = mount(<HashRouter>
      <CounterBar>
        <CounterBar.Total score={1}>All counters</CounterBar.Total>
        <CounterBar.Counters>
          <CounterBar.Counter score={1} component={Link} to="/courses/1/" active>Counter 1</CounterBar.Counter>
        </CounterBar.Counters>
      </CounterBar>
    </HashRouter>);
    const counterWrapper = wrapper.find('Counter').first();
    expect(counterWrapper.prop('component')).toBe(Link);
  });
  
  it('does not forward props when it shouldn\'t', () => {
    const linkWrapper = wrapper.find('Counter').first().find('Link');
    expect(linkWrapper.prop('active')).toBe(undefined);
    expect(linkWrapper.prop('empty')).toBe(undefined);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
