import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('OpenButton', () => {
  let wrapper;

  it('renders with no props', () => {
    wrapper = shallow(<Component />);
    expect(wrapper.find('RotatingButton')).toHaveStyleRule('border', 'none');
  });
    
  it('renders with open prop', () => {
    wrapper = shallow(<Component open />);
    expect(wrapper.find('RotatingButton')).toHaveStyleRule('transform', 'rotate(0deg)');
  });

  it('calls onChange event when clicked', () => {
    const handleClick = jest.fn();
    wrapper = shallow(<Component onChange={handleClick} />);
    wrapper.simulate('click');
    expect(handleClick).toHaveBeenCalledWith({open: true});
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

