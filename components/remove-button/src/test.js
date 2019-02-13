import React from 'react';
import { mount, shallow } from 'enzyme';

import RemoveButton from '.';

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
