import React from 'react';
import { mount } from 'enzyme';

import Spinner from '.';

describe('Spinner', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper.exists()).toBe(true);
  });

  it('styles correctly in response to prop', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper).toHaveStyleRule('opacity', '0');
    wrapper.setProps({ visible: true });
    expect(wrapper).toHaveStyleRule('opacity', '1');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Spinner visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
