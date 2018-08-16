import React from 'react';
import { mount, shallow } from 'enzyme';

import ArrayObjectTable from '.';

const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two', transform: () => 'two' },
  { key: 'three', heading: 'Three' },
];

const array = [
  {},
  { one: 'test', two: 'test' },
];

const getRows = wrapper => wrapper.find('Table').prop('rows');

describe('ArrayObjectTable', () => {
  it('renders with required props', () => {
    const wrapper = shallow(<ArrayObjectTable fields={fields} array={array} />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('renders table data', () => {
    it('renders expected table heading cells ', () => {
      const wrapper = mount(<ArrayObjectTable fields={fields} array={array} />);
      const titles = wrapper.find('Table').prop('titles');
      expect(titles).toEqual(['One', 'Two', 'Three']);
    });

    it('renders expected table data cells', () => {
      const wrapper = mount(<ArrayObjectTable fields={fields} array={array} />);
      expect(getRows(wrapper)).toEqual([['-', 'two', '-'], ['test', 'two', '-']]);
    });
  });

  describe('responds as expected to additional props', () => {
    it('renders a table heading if provided', () => {
      const wrapper = shallow(<ArrayObjectTable fields={fields} array={array} title="Heading" />);
      expect(wrapper.contains('Heading')).toBe(true);
    });

    it('skips empty rows if skipEmptyRows is true', () => {
      const wrapper = mount(<ArrayObjectTable fields={fields} array={array} skipEmptyRows />);
      expect(getRows(wrapper)).toEqual([['test', 'two', '-']]);
    });

    it('renders nothing if no rows are returned and hideWithNoValues is true', () => {
      const emptyArray = [{}, {}, {}];
      const wrapper = shallow(<ArrayObjectTable
        fields={fields}
        array={emptyArray}
        skipEmptyRows
        hideWithNoValues
      />);
      expect(wrapper.html()).toBe(null);
    });

    it('renders one tbody row if no rows are returned and hideWithNoValues is not true', () => {
      const emptyArray = [{}, {}, {}];
      const wrapper = mount(<ArrayObjectTable fields={fields} array={emptyArray} skipEmptyRows />);
      expect(wrapper.find('tbody tr').length).toBe(1);
    });
  });

  describe('uses transforms as expected', () => {
    const fieldsWithTransforms = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: value => (value ? value.toLowerCase() : '-') },
      { key: 'three', heading: 'Three' },
      { key: 'four', heading: 'Four', transform: value => (value ? value.toLowerCase() : '*') },
    ];
    const arrayOfOnlyTwo = [
      { one: 'One', two: 'Two' },
    ];

    it('sends table row cells as expected', () => {
      const wrapper = mount(<ArrayObjectTable
        fields={fieldsWithTransforms}
        array={arrayOfOnlyTwo}
        title="Heading"
        defaultTransform={value => (value || 'x')}
      />);
      expect(getRows(wrapper)).toEqual([['One', 'two', 'x', '*']]);
    });
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ArrayObjectTable fields={fields} array={array} skipEmptyRows />);
    expect(wrapper).toMatchSnapshot();
  });
});
