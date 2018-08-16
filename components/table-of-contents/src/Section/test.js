import React from 'react';
import { shallow } from 'enzyme';

import { Entry } from '.';

describe('TableOfContents Section Entry', () => {
  let wrapper;
  const addContent = jest.fn();
  const removeContent = jest.fn();

  it('renders without crashing', () => {
    wrapper = shallow(<Entry id="id" title="Title" toc={{ addContent, removeContent }}>
        Section text here
    </Entry>);
  });

  it('has called addContent in context', () => {
    expect(addContent.mock.calls.length).toBe(1);
  });

  it('has not yet called removeContent in context', () => {
    expect(removeContent.mock.calls.length).toBe(0);
  });

  it('calls removeContent on remove/unmount', () => {
    wrapper.unmount();
    expect(removeContent.mock.calls.length).toBe(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
