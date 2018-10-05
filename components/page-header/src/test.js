import React from 'react';
import { mount } from 'enzyme';

import { PageHeaderExample } from './fixtures';

describe(PageHeaderExample, () => {
  let wrapper;

  it('renders the storybook example', () => {
    wrapper = mount(<PageHeaderExample />);
    expect(wrapper).toMatchSnapshot();
  });
});
