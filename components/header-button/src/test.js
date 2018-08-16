import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { LINK_COLOUR } from 'govuk-colours';

import HeaderButton from '.';

expect.extend(createMatchers(emotion));

describe('HeaderButton', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HeaderButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('applies styles on active prop', () => {
    const wrapper = shallow(<HeaderButton active />).find('Button');
    expect(wrapper).toHaveStyleRule('border-bottom-color', LINK_COLOUR);
    expect(wrapper).toHaveStyleRule('border-top-color', LINK_COLOUR);
    expect(wrapper).toHaveStyleRule('color', LINK_COLOUR);
  });

  it('applies styles on disabled prop', () => {
    const wrapper = shallow(<HeaderButton disabled />).find('Button');
    expect(wrapper).toHaveStyleRule('opacity', '0.35');
    // Can't see a way of testing pseudo-selectors here...
  });

  it('matches snapshot', () => {
    const wrapper = mount(<HeaderButton active />);
    expect(wrapper).toMatchSnapshot();
  });
});
