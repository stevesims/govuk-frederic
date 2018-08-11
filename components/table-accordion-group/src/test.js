import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import TableAccordionGroup from '.';

expect.extend(createMatchers(emotion));

describe('TableAccordionGroup', () => {
  it('renders with only required properties', () => {
    const wrapper = shallow(<TableAccordionGroup expanded="Expanded">Test</TableAccordionGroup>);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders title when passed', () => {
    const wrapper = mount(<TableAccordionGroup expanded="Expanded" title="Title">Test</TableAccordionGroup>);
    expect(
      wrapper
        .find('Title')
        .childAt(0)
        .text(),
    ).toBe('Title');
  });

  it('triggers onChange when OpenButton is clicked', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <TableAccordionGroup expanded="Expanded" onChange={changeHandler}>
        Test
      </TableAccordionGroup>,
    );
    wrapper.find('OpenButton').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
  
  it('does not trigger onChange when title is clicked  and changeOnTitleClick is not true', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <TableAccordionGroup expanded="Expanded" onChange={changeHandler}>
        Test
      </TableAccordionGroup>,
    );
    wrapper.find('Title').simulate('click');
    expect(changeHandler).not.toHaveBeenCalled();
  });

  it('triggers onChange when title is clicked and changeOnTitleClick is true', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <TableAccordionGroup expanded="Expanded" onChange={changeHandler} changeOnTitleClick>
        Test
      </TableAccordionGroup>,
    );
    wrapper.find('Title').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <TableAccordionGroup expanded="Expanded" onChange={changeHandler} changeOnTitleClick>
        Test
      </TableAccordionGroup>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
