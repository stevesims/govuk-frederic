import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('RemoveButton', () => {
  let wrapper;
  
  it('renders with expected style rule', () => {
    wrapper = shallow(<Component />);
    expect(wrapper).toHaveStyleRule('font-size', '11px');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
