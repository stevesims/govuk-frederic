import test from 'tape';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Component, { Title } from '.';
import OpenButton from '../OpenButton';

test(
  'CompactTableAccordionGroup: Component renders with only required properties',
  assert => {
    shallow(<Component expanded="Expanded">Test</Component>);
    assert.end();
  }
);

test(
  'CompactTableAccordionGroup: OpenButton click triggers onChange',
  assert => {
    const handleChange = sinon.spy();

    const wrapper = mount(<Component expanded="Expanded" onChange={handleChange}>Test</Component>);
    wrapper.find(OpenButton).simulate('click');
    assert.equal(handleChange.callCount, 1);
    assert.end();
  }
);

test(
  'CompactTableAccordionGroup: Title triggers onChange when changeOnTitleClick is true',
  assert => {
    const handleChange = sinon.spy();

    const wrapper = mount(<Component expanded="Expanded" title="Test" onChange={handleChange} changeOnTitleClick>Test</Component>);
    wrapper.find(Title).simulate('click');
    assert.equal(handleChange.callCount, 1);
    assert.end();
  }
);

test(
  'CompactTableAccordionGroup: Title does not trigger onChange when changeOnTitleClick not set',
  assert => {
    const handleChange = sinon.spy();

    const wrapper = mount(<Component expanded="Expanded" onChange={handleChange}>Test</Component>);
    wrapper.find(Title).first().simulate('click');
    assert.equal(handleChange.callCount, 0);
    assert.end();
  }
);

test(
  'CompactTableAccordionGroup: Missing changeOnTitleClick property does not cause console error',
  assert => {
    const spy = sinon.spy(console, 'error');
    mount(<Component title="Test" expanded="Expanded">Test</Component>);
    assert.equal(spy.callCount, 0);
    assert.end();
  }
);
