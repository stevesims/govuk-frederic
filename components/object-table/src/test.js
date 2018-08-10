import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

describe('ObjectTable', () => {
  let fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two', transform: () => 'two' },
  ];
  let object = { one: 'test', two: 'test' };
  const title = 'Heading';
  let wrapper;

  it('renders with defaults', () => {
    wrapper = mount(<Component />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a table of data based on params', () => {
    wrapper = mount(<Component fields={fields} object={object} />);
    const table = wrapper.find('Table');
    const rows = table.prop('rows');
  
    expect(rows).toEqual([['One', 'test'], ['Two', 'two']]);
  });

  it('optionally renders a heading for a table', () => {
    fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'two' },
    ];
    object = { one: 'test', two: 'test' };
    wrapper = mount(<Component fields={fields} object={object} title={title} />);
    expect(wrapper.contains('Heading')).toBe(true);
  });

  it('omits rows in table for null values', () => {
    fields = [
      { key: 'one', heading: 'one' },
      { key: 'two', heading: 'two', transform: () => null },
      { key: 'three', heading: 'three'},
    ];
    object = { one: 'test', two: 'test', three: null };
    wrapper = mount(<Component fields={fields} object={object} skipEmptyValues />);
    const rows = wrapper.find('tr');
    
    expect(rows.length).toBe(1);
  });

  it('renders nothing when rows have no values and hideWithNoValues is true', () => {
    fields = [
      { key: 'one', heading: 'one' },
      { key: 'two', heading: 'two', transform: () => null },
      { key: 'three', heading: 'three'},
    ];
    object = {};
    wrapper = mount(<Component fields={fields} object={object} hideWithNoValues />);   
    expect(wrapper.html()).toBe(null);
  });
});

