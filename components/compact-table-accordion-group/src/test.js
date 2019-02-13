import React from 'react';
import { mount, shallow } from 'enzyme';

import CompactTableAccordionGroup from '.';

describe('CompactTableAccordionGroup', () => {
  it('renders with only required props', () => {
    const wrapper = shallow(<CompactTableAccordionGroup expanded="Expanded" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders title when passed', () => {
    const wrapper = mount(<CompactTableAccordionGroup expanded="Expanded" title="Title"/>);
    expect(wrapper.text()).toContain('Title');
  });

  it('triggers onChange when open button is clicked', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <CompactTableAccordionGroup expanded="Expanded" onChange={changeHandler}>
        Test
      </CompactTableAccordionGroup>,
    );
    wrapper.find('OpenButton').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it.skip('does not trigger onChange when title is clicked and changeOnTitleClick is false', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <CompactTableAccordionGroup expanded="Expanded" onChange={changeHandler}>
        Test
      </CompactTableAccordionGroup>,
    );
    wrapper.find('Title').simulate('click');
    expect(changeHandler).not.toHaveBeenCalledTimes(1);
  });

  it.skip('triggers onChange when title is clicked and changeOnTitleClick is true', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <CompactTableAccordionGroup expanded="Expanded" onChange={changeHandler} changeOnTitleClick>
        Test
      </CompactTableAccordionGroup>,
    );
    wrapper.find('Title').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const changeHandler = jest.fn();
    const wrapper = mount(
      <CompactTableAccordionGroup expanded="Expanded" onChange={changeHandler} changeOnTitleClick>
        Test
      </CompactTableAccordionGroup>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
