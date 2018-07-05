import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { LINK_COLOUR } from 'govuk-colours';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('HeaderButton', () => {
  let wrapper;

  it('renders with no properties', () => {
    wrapper = shallow(<Component />);
  });

  it('applies styles on active prop', () => {
    wrapper = shallow(<Component active />).find('Button');
    expect(wrapper).toHaveStyleRule('border-bottom-color', LINK_COLOUR);
    expect(wrapper).toHaveStyleRule('border-top-color', LINK_COLOUR);
    expect(wrapper).toHaveStyleRule('color', LINK_COLOUR);
  });
  
  it('applies styles on disabled prop', () => {
    wrapper = shallow(<Component disabled />).find('Button');
    expect(wrapper).toHaveStyleRule('opacity', '0.35');
    // Can't see a way of testing pseudo-selectors here...
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
