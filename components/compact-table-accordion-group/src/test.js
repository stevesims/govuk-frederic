import React from 'react';
import { mount, shallow } from 'enzyme';
import Component from '.';

describe('CompactTableAccordionGroup', () => {
  let wrapper;
  const changeHandler = jest.fn();

  it('renders without crashing', () => {
    wrapper = shallow(<Component expanded="Expanded">Test</Component>);
  });

  it('renders title when passed', () => {
    wrapper = shallow(
      <Component
        expanded="Expanded"
        onChange={changeHandler}
        title="Example title"
      >
        Test
      </Component>,
    );
    expect(
      wrapper
        .find('Title')
        .childAt(0)
        .text(),
    ).toBe('Example title');
  });

  it('triggers onChange when open button is clicked', () => {
    wrapper = mount(
      <Component expanded="Expanded" onChange={changeHandler}>
        Test
      </Component>,
    );
    wrapper.find('button').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onChange when title is clicked and changeOnTitleClick is false', () => {
    changeHandler.mockReset();
    wrapper = mount(
      <Component
        expanded="Expanded"
        title="Example title"
        onChange={changeHandler}
      >
        Test
      </Component>,
    );
    wrapper.find('header').simulate('click');
    expect(changeHandler).not.toHaveBeenCalled();
  });

  it('triggers onChange when title is clicked and changeOnTitleClick is true', () => {
    changeHandler.mockReset();
    wrapper = mount(
      <Component
        expanded="Expanded"
        title="Example title"
        onChange={changeHandler}
        changeOnTitleClick
      >
        Test
      </Component>,
    );
    wrapper.find('header').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
