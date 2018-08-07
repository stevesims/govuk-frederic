import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

describe('ArrayObjectTable', () => {
  let fields = [
    { key: 'one', heading: 'One' },
    { key: 'two', heading: 'Two', transform: () => 'two' },
    { key: 'three', heading: 'Three' },
  ];
  let array = [
    {}, // empty record to be automatically omitted
    { one: 'test', two: 'test' },
  ];
  const title = 'Heading';
  let wrapper;

  it('renders with defaults', () => {
    wrapper = mount(<Component />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with basic props', () => {
    wrapper = mount(<Component fields={fields} array={array} />);
    
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a table of data based on props passed', () => {
    const table = wrapper.find('Table');
    const rows = table.prop('rows');
    const titles = table.prop('titles');
  
    expect(rows).toEqual([['-', 'two', '-'], ['test', 'two', '-']]);
    expect(titles).toEqual(['One', 'Two', 'Three']);
  });

  it('skips empty rows when skipEmptyRows prop is passed', () => {
    wrapper.setProps({ skipEmptyRows: true });
    const table = wrapper.find('Table');
    const rows = table.prop('rows');

    expect(rows).toEqual([['test', 'two', '-']]);
  });

  it('optionally renders a heading for a table', () => {
    wrapper.setProps({ title });

    expect(wrapper.contains('Heading')).toBe(true);
  });

  it('renders one tbody row when no rows are returned if hideWithNoValues is not true', () => {
    fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two' },
    ];
    array = [
      {},
      {},
    ];
    wrapper = mount(<Component fields={fields} array={array} skipEmptyRows/>);
    const table = wrapper.find('Table');
    const rows = table.prop('rows');
    expect(rows).toEqual([['-', '-']]);
    expect(wrapper.find('tbody tr').length).toBe(1);
  });

  it('renders nothing when no rows are returned and hideWithNoValues is true', () => {
    wrapper = mount(<Component fields={fields} array={array} skipEmptyRows hideWithNoValues/>);

    expect(wrapper.html()).toBe(null);
  });
});

