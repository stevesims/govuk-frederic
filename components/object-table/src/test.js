import React from 'react';
import { mount, shallow } from 'enzyme';

import ObjectTable from '.';

const fields = [
  { key: 'one', heading: 'One' },
  { key: 'two', heading: 'Two', transform: () => 'two' },
];

const object = { one: 'test', two: 'test' };

describe('ObjectTable', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ObjectTable />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('renders table data', () => {
    it('renders expected table data cells', () => {
      const wrapper = mount(<ObjectTable fields={fields} object={object} />);
      expect(wrapper.find('Table').prop('rows')).toEqual([['One', 'test'], ['Two', 'two']]);
    });

    it('omits rows in table for null values', () => {
      const fieldsWithTransform = [
        { key: 'one', heading: 'one' },
        { key: 'two', heading: 'two', transform: () => null },
        { key: 'three', heading: 'three' },
      ];
      const objectWithNull = { one: 'test', two: 'test', three: null };
      const wrapper = mount(
        <ObjectTable fields={fieldsWithTransform} object={objectWithNull} skipEmptyValues />
      );
      expect(wrapper.find('tr').length).toBe(1);
    });

    it('renders nothing when rows have no values and hideWithNoValues is true', () => {
      const objectWithNoValues = {};
      const wrapper = mount(
        <ObjectTable fields={fields} object={objectWithNoValues} hideWithNoValues />
      );
      expect(wrapper.html()).toBe(null);
    });
  });

  describe('responds as expected to additional props', () => {
    it('optionally renders a heading for a table', () => {
      const wrapper = shallow(<ObjectTable fields={fields} object={object} title="Heading" />);
      expect(wrapper.contains('Heading')).toBe(true);
    });
  });

  it('matches snapshot', () => {
    const wrapper = mount(<ObjectTable fields={fields} object={object} />);
    expect(wrapper).toMatchSnapshot();
  });
});

