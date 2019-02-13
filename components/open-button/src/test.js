import React from 'react';
import { mount, shallow } from 'enzyme';

import OpenButton from '.';

describe('OpenButton', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<OpenButton />);
    expect(wrapper.exists()).toBe(true);
  });

  it('styles in response to open prop', () => {
    const wrapper = mount(<OpenButton />);

    expect(wrapper).toHaveStyleRule('border', 'none');
    wrapper.setProps({ open: true });
    expect(wrapper).toHaveStyleRule('transform', 'rotate(0deg)');
  });

  it('calls onChange event when clicked', () => {
    const handleClick = jest.fn();

    mount(<OpenButton onChange={handleClick} />).simulate('click');
    expect(handleClick).toHaveBeenCalledWith({open: true});
  });

  it('matches snapshot', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<OpenButton open onChange={handleClick} />);

    expect(wrapper).toMatchSnapshot();
  });
});
