import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Table from '.';

expect.extend(createMatchers(emotion));

const titles = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const rows = [
  ['Content 1-1', 'Content 1-2', 'Content 1-3', 'Content 1-4'],
  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const columnTableNames = ['one', 'two', 'three', ['i', 'am', 'named', 'individually']];
const rowTableNamesWithTitles = ['heading', 'one', ['i', 'am', 'named', 'individually'], 'three'];
const rowTableNames = ['one', ['i', 'am', 'named', 'individually'], 'three'];

describe('Table', () => {
  it('renders with only required props', () => {
    const wrapper = shallow(<Table rows={rows} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders rows from prop', () => {
    const wrapper = mount(<Table rows={rows} />);
    expect(wrapper.find('tr')).toHaveLength(3);
  });

  it('renders titles from prop', () => {
    const wrapper = mount(<Table rows={rows} titles={titles} />);
    expect(wrapper.find('TableHeading')).toHaveLength(4);
  });

  it('names each cell according to its column', () => {
    const wrapper = mount(<Table rows={rows} titles={titles} name="name" names={columnTableNames} />);
    const th = wrapper.find('TableHeading').at(2);
    expect(th.prop('name')).toBe('three');
    const td = wrapper.find('TableData').at(2);
    expect(td.prop('name')).toBe('three');
  });

  it('renders rows with header column', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      titles={titles}
      names={columnTableNames}
      rowIncludesHeading
      nameByRow
    />);
    expect(wrapper.find('TableHeading')).toHaveLength(7);
  });

  it('names each cell according to its row, no titles', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      names={rowTableNames}
      rowIncludesHeading
      nameByRow
    />);

    let th = wrapper.find('TableHeading').at(0);
    expect(th.prop('name')).toBe('one');

    let td = wrapper.find('TableData').at(0);
    expect(td.prop('name')).toBe('one');

    th = wrapper.find('TableHeading').at(1);
    expect(th.prop('name')).toBe('i');

    td = wrapper.find('TableData').at(3);
    expect(td.prop('name')).toBe('am');

    td = wrapper.find('TableData').at(4);
    expect(td.prop('name')).toBe('named');

    td = wrapper.find('TableData').at(5);
    expect(td.prop('name')).toBe('individually');

    th = wrapper.find('TableHeading').at(2);
    expect(th.prop('name')).toBe('three');

    td = wrapper.find('TableData').at(8);
    expect(td.prop('name')).toBe('three');
  });

  it('renders name on table element', () => {
    const wrapper = mount(<Table
      name="tableNameAtt"
      rows={rows}
      rowIncludesHeading
      nameByRow
    />);

    expect(wrapper.find('table').prop('name')).toBe('tableNameAtt');
  });

  it('names each cell according to its row, with titles', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      names={rowTableNamesWithTitles}
      rowIncludesHeading
      nameByRow
      titles={titles}
    />);

    let th = wrapper.find('TableHeading').at(3);
    expect(th.prop('name')).toBe('heading');

    th = wrapper.find('TableHeading').at(4);
    expect(th.prop('name')).toBe('one');

    let td = wrapper.find('TableData').at(0);
    expect(td.prop('name')).toBe('one');

    th = wrapper.find('TableHeading').at(5);
    expect(th.prop('name')).toBe('i');

    td = wrapper.find('TableData').at(3);
    expect(td.prop('name')).toBe('am');

    td = wrapper.find('TableData').at(4);
    expect(td.prop('name')).toBe('named');

    td = wrapper.find('TableData').at(5);
    expect(td.prop('name')).toBe('individually');

    th = wrapper.find('TableHeading').at(6);
    expect(th.prop('name')).toBe('three');

    td = wrapper.find('TableData').at(8);
    expect(td.prop('name')).toBe('three');
  });

  it('sets th width according to rowHeading prop', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      names={rowTableNamesWithTitles}
      rowIncludesHeading
      nameByRow
      titles={titles}
    />);
    expect(wrapper.find('TableHeading').at(3)).not.toHaveStyleRule('width');
    const t = titles.slice(-1);
    const r = rows.map(row => row.slice(-1));
    wrapper.setProps({ titles: t, rows: r });
    expect(wrapper.find('TableHeading').at(3)).toHaveStyleRule('width', '25%');
  });

  it('sets table-layout according to flexibleColumns prop', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      names={rowTableNamesWithTitles}
      rowIncludesHeading
      nameByRow
      titles={titles}
    />);
    expect(wrapper).toHaveStyleRule('table-layout', 'fixed');
    wrapper.setProps({ flexibleColumns: true });
    expect(wrapper).toHaveStyleRule('table-layout', 'auto');
  });

  it.skip('sets cell border according to borderless prop prop', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      names={rowTableNamesWithTitles}
      rowIncludesHeading
      nameByRow
      titles={titles}
    />);
    // debugger;
    expect(wrapper.find('TableData').at(0)).toHaveStyleRule('border-bottom', expect.any(String));
    wrapper.setProps({ borderless: true });
    expect(wrapper.find('TableData').at(0)).not.toHaveStyleRule('border-bottom');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Table
      rows={rows}
      name="name"
      names={rowTableNamesWithTitles}
      rowIncludesHeading
      flexibleColumns
      nameByRow
      titles={titles}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
