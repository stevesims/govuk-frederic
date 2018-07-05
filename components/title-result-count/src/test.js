import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('TitleResultCount', () => {
  let wrapper;

  it('renders with no properties', () => {
    wrapper = shallow(<Component>Sample title</Component>);
  });

  it('renders style rules', () => {
    expect(wrapper).toHaveStyleRule('display', 'inline-block');
  });

  it('renders title', () => {
    expect(
      wrapper
        .find('Title')
        .childAt(0)
        .text(),
    ).toBe('Sample title');
  });

  it('renders with a count', () => {
    wrapper.setProps({ count: 3 });
    expect(
      wrapper
        .find('Styled(span)')
        .childAt(0)
        .text(),
    ).toBe('3');
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
