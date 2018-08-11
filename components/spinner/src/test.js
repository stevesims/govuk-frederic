import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Spinner from '.';

expect.extend(createMatchers(emotion));

describe('Spinner', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.exists()).toBe(true);
  });

  it('styles correctly in response to prop', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toHaveStyleRule('opacity', '0');
    wrapper.setProps({ visible: true });
    expect(wrapper).toHaveStyleRule('opacity', '1');
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Spinner visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
