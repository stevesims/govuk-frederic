import React from 'react';
import { mount } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { GREY_1 } from 'govuk-colours';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('Keyline', () => {
  let wrapper;

  it('renders with no props', () => {
    wrapper = mount(<Component />);
    expect(wrapper).toHaveStyleRule('border-bottom', `1px solid ${GREY_1}`);
  });

  it('renders children', () => {
    wrapper = mount(<Component>Sample text</Component>);
    expect(wrapper.find('KeylineWrapper').childAt(0).text()).toBe('Sample text');
  });
 
  it('renders as inlineBlock', () => {
    wrapper = mount(<Component inlineBlock />);
    expect(wrapper).toHaveStyleRule('display', 'inline-block'); 
  });
  
  it('renders with borderColor', () => {
    wrapper = mount(<Component borderColor="red" />);
    expect(wrapper).toHaveStyleRule('border-bottom', '1px solid red'); 
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
