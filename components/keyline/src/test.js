import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Keyline from '.';

expect.extend(createMatchers(emotion));

describe('Keyline', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Keyline />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders children', () => {
    const wrapper = mount(<Keyline>Sample text</Keyline>);
    expect(wrapper.find('KeylineWrapper').childAt(0).text()).toBe('Sample text');
  });

  it('renders as inlineBlock in response to prop', () => {
    const wrapper = mount(<Keyline inlineBlock />);
    expect(wrapper).toHaveStyleRule('display', 'inline-block'); 
  });
  
  it('renders with borderColor in response to prop', () => {
    const wrapper = mount(<Keyline borderColor="red" />);
    expect(wrapper).toHaveStyleRule('border-bottom', '1px solid red'); 
  });

  it('matches snapshot', () => {
    const wrapper = mount(<Keyline inlineBlock borderColor="blue" />);
    expect(wrapper).toMatchSnapshot();
  });
});
