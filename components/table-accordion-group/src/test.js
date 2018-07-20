import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { NTA_LIGHT } from '@govuk-react/constants';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('TableAccordionGroup', () => {
  let wrapper;
  const changeHandler = jest.fn();

  it('renders with only required properties', () => {
    wrapper = shallow(<Component expanded="Expanded">Test</Component>);
  });

  it('renders style rules', () => {
    expect(wrapper).toHaveStyleRule('font-family', NTA_LIGHT.replace(/\s/g, ''));
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

  it('triggers onChange when OpenButton is clicked', () => {
    wrapper = mount(
      <Component expanded="Expanded" onChange={changeHandler}>
        Test
      </Component>,
    );
    wrapper.find('OpenButton').simulate('click');
    expect(changeHandler).toHaveBeenCalledTimes(1);
  });
  
  it('does not trigger onChange when title is clicked  and changeOnTitleClick is not true', () => {
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
