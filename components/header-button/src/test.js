import React from 'react';
import { mount } from 'enzyme';
import { LINK_COLOUR } from 'govuk-colours';

import HeaderButton from '.';

describe('HeaderButton', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<HeaderButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('applies styles on active prop', () => {
    const wrapper = mount(<HeaderButton active />);
    expect(wrapper).toHaveStyleRule('border-bottom-color', LINK_COLOUR);
    expect(wrapper).toHaveStyleRule('border-top-color', LINK_COLOUR);
    expect(wrapper).toHaveStyleRule('color', LINK_COLOUR);
  });

  it('applies styles on disabled prop', () => {
    const wrapper = mount(<HeaderButton disabled />);
    expect(wrapper).toHaveStyleRule('opacity', '0.35');
    // Can't see a way of testing pseudo-selectors here...
  });

  it('matches snapshot', () => {
    const wrapper = mount(<HeaderButton active />);
    expect(wrapper).toMatchSnapshot();
  });
});
