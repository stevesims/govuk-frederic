import React from 'react';
import { mount } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('CompactTableAccordionGroup', () => {
  let wrapper;
  const changeHandler = jest.fn();

  it('renders with only required properties', () => {
    wrapper = mount(<Component expanded="Expanded" />);
  });

  it('renders style rules', () => {
    expect(wrapper).toHaveStyleRule('font-family', '"nta",Arial,sans-serif');
  });

  it('renders title when passed', () => {
    wrapper.setProps({ title: 'Example title' });
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
    wrapper.find('OpenButton').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onChange when title is clicked and changeOnTitleClick is false', () => {
    changeHandler.mockReset();
    wrapper.find('Title').simulate('click');
    expect(changeHandler).not.toHaveBeenCalled();
  });

  it('triggers onChange when title is clicked and changeOnTitleClick is true', () => {
    changeHandler.mockReset();
    wrapper.setProps({ changeOnTitleClick: true });
    wrapper.find('Title').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
