import React from 'react';
import { mount, shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { ERROR_COLOUR } from 'govuk-colours';

import CountdownTextArea from '.';

expect.extend(createMatchers(emotion));

const onChange = jest.fn();

describe('CountdownTextArea', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CountdownTextArea />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('displays a countdown based on maxLength prop', () => {
    it('contains countdown', () => {
      const wrapper = shallow(<CountdownTextArea maxLength={250} />);
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('250');
    });

    it('reduces countdown', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={250} onChange={onChange} />
      );
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('246');
    });
  });

  describe('displays a countdown container prop', () => {
    it('correctly shows container name attribute', () => {
      const wrapper = shallow(<CountdownTextArea name="countdown" />);
      expect(wrapper.prop('name')).toEqual('countdown--container');
    });

    it('correctly shows countdown wrapper attribute', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" name="countdown" maxLength={202} />
      );
      expect(wrapper.find('StyledCountdownContainer').prop('name'))
        .toEqual('countdown--count_wrapper');
    });

    it('correctly shows countdown name attribute', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" name="countdown" maxLength={202} />
      );
      expect(wrapper.find('StyledCountdown').prop('name'))
        .toEqual('countdown--count');
    });
  });

  describe('displays count as expected', () => {
    it('correctly shows 198 when 198 remaining', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={202} onChange={onChange} />
      );
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('198');
    });

    it('correctly shows -2 as count when 2 over', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={2} onChange={onChange} />
      );
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('-2');
    });
  });

  describe('sets styles as expected', () => {
    it('sets color and font-weight when overflowing', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={2} onChange={onChange} />
      );
      expect(wrapper).toHaveStyleRule('color', ERROR_COLOUR);
      expect(wrapper).toHaveStyleRule('font-weight', '800');
    });

    it('does not set color and font-weight when not overflowing', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={5} onChange={onChange} />
      );
      expect(wrapper).not.toHaveStyleRule('color', ERROR_COLOUR);
      expect(wrapper).not.toHaveStyleRule('font-weight', '800');
    });
  });

  describe('manages maxLength prop as expected', () => {
    it('sets maxLength prop if sent', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={10} onChange={onChange} />
      );
      expect(wrapper.find('StyledTextAreaField').prop('maxLength')).toBe(10);
    });

    it('does not set maxLength prop if not sent', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={2} noMaxLengthAttr onChange={onChange} />
      );
      expect(wrapper.find('StyledTextAreaField').prop('maxLength')).toBe(null);
    });

    it('maxLengths to zero when positiveOnly set', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" maxLength={2} positiveOnly onChange={onChange} />
      );
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('0');
    });

    it('omits countdown field when no maxLength given', () => {
      const wrapper = shallow(
        <CountdownTextArea value="Test" onChange={onChange} />
      );
      expect(wrapper.find('StyledCountdown').exists()).toBe(false);
    });
  });

  it('matches snapshot', () => {
    const wrapper = mount(
      <CountdownTextArea value="Test" maxLength={2} onChange={onChange} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
