import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import RemoveButton from '.';

expect.extend(createMatchers(emotion));

describe('RemoveButton', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RemoveButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = mount(<RemoveButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
