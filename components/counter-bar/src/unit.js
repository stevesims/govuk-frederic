import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Component, { CountWrapper, Counter } from '.';

const testCounters = [
  {
    id: 'abc',
    name: 'abc',
    score: 1,
  },
  {
    id: 'def',
    name: 'def',
    score: 3,
  },
  {
    id: 'ghi',
    name: 'ghi',
  },
  {
    id: 'jlk',
    name: '',
    score: 0,
  },
];

const testActiveCounters = [
  {
    active: true,
    id: 'abc',
    name: 'abc',
    score: 1,
  },
  {
    id: 'def',
    name: 'def',
    score: 3,
  },
];

const testDisabledCounters = [
  {
    id: 'def',
    name: 'def',
    score: 0,
  },
];

describe('CounterBar: Component renders counters with (active) title', assert => {
  mount(<Component counters={testCounters} listTitle="Test Title" activeTitle />);
  assert.end();
});

describe('CounterBar: Component renders with counters with active values', assert => {
  mount(<Component counters={testActiveCounters} listTitle="Test Title" />);
  assert.end();
});

describe('CounterBar: Component renders with counters with disabled counter values', assert => {
  mount(<Component counters={testDisabledCounters} listTitle="Test Title" />);
  assert.end();
});

describe('CounterBar: CountWrapper triggers onSelect when click is true', assert => {
  const handleChange = sinon.spy();
  const wrapper = mount(<Component counters={testActiveCounters} listTitle="Test" />);

  wrapper.find(CountWrapper).simulate('click');
  assert.equal(handleChange.callCount, 0);

  wrapper.setProps({ onSelect: handleChange });
  wrapper.find(CountWrapper).simulate('click');
  assert.equal(handleChange.callCount, 1);
  assert.end();
});

describe('CounterBar: Counter onSelect called with expected ID on click', assert => {
  const handleChange = sinon.spy();

  const wrapper = mount(<Component counters={testActiveCounters} listTitle="Test" onSelect={handleChange} />);
  wrapper
    .find(Counter)
    .first()
    .simulate('click');
  assert.ok(handleChange.calledWithExactly(testActiveCounters[0].id), 'onSelect called with expected ID');
  assert.equal(handleChange.callCount, 1);
  assert.end();
});
