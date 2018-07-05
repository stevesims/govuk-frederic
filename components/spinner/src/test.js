import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('Spinner', () => {
  let wrapper;

  it('renders with expected style rule', () => {
    wrapper = shallow(<Component />);
    expect(wrapper).toHaveStyleRule('display', 'inline-block');
    expect(wrapper).toHaveStyleRule('opacity', '0');
  });

  it('applies opacity according to prop', () => {
    wrapper = shallow(<Component visible />);
    expect(wrapper).toHaveStyleRule('opacity', '1');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
