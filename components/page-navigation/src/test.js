import React from 'react';
import { mount } from 'enzyme';

import { PageNavigationExample, ReactRouterExample } from './fixtures';

describe(PageNavigationExample, () => {
  it('renders the storybook example', () => {
    const wrapper = mount(<PageNavigationExample />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe(PageNavigationExample, () => {
  it('renders the with React Router', () => {
    const wrapper = mount(<ReactRouterExample />);
    expect(wrapper).toMatchSnapshot();
  });
});
