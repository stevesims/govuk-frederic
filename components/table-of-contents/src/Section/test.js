import React from 'react';
import { mount, shallow } from 'enzyme';

import Section, { Entry } from '.';

describe('TableOfContents Section', () => {
  it('renders standalone', () => {
    const wrapper = mount(
      <Section id="id" title="Title">Section text here</Section>,
    );
    expect(wrapper.exists()).toBe(true);
  });
});

describe('TableOfContents Section Entry', () => {
  describe('works with Context API', () => {
    it('renders without crashing', () => {
      const addContent = jest.fn();
      const removeContent = jest.fn();
      const wrapper = shallow(
        <Entry id="id" title="Title" toc={{ addContent, removeContent }}>
          Section text here
        </Entry>,
      );
      expect(wrapper.exists()).toBe(true);
    });

    it('has called addContent in context', () => {
      const addContent = jest.fn();
      const removeContent = jest.fn();
      shallow(
        <Entry id="id" title="Title" toc={{ addContent, removeContent }}>
          Section text here
        </Entry>,
      );
      expect(addContent.mock.calls.length).toBe(1);
    });

    it('has not yet called removeContent in context', () => {
      const addContent = jest.fn();
      const removeContent = jest.fn();
      shallow(
        <Entry id="id" title="Title" toc={{ addContent, removeContent }}>
          Section text here
        </Entry>,
      );
      expect(removeContent.mock.calls.length).toBe(0);
    });

    it('calls removeContent on remove/unmount', () => {
      const addContent = jest.fn();
      const removeContent = jest.fn();
      const wrapper = shallow(
        <Entry id="id" title="Title" toc={{ addContent, removeContent }}>
          Section text here
        </Entry>,
      );
      wrapper.unmount();
      expect(removeContent.mock.calls.length).toBe(1);
    });

    it('matches snapshot', () => {
      const addContent = jest.fn();
      const removeContent = jest.fn();
      const wrapper = shallow(
        <Entry id="id" title="Title" toc={{ addContent, removeContent }}>
          Section text here
        </Entry>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('works without Context API', () => {
    it('renders without crashing', () => {
      const wrapper = mount(
        <Entry id="id" title="Title">
          Section text here
        </Entry>,
      );
      expect(wrapper.exists()).toBe(true);
    });

    it('does not find toc prop', () => {
      const wrapper = mount(
        <Entry id="id" title="Title">
          Section text here
        </Entry>,
      );
      expect(wrapper.prop('toc')).toBeUndefined();
    });

    it('unmounts without issue', () => {
      const wrapper = mount(
        <Entry id="id" title="Title">
          Section text here
        </Entry>,
      );
      wrapper.unmount();
    });

    it('matches snapshot', () => {
      const wrapper = mount(
        <Entry id="id" title="Title">
          Section text here
        </Entry>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
