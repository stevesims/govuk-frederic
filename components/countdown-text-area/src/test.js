import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import { ERROR_COLOUR } from 'govuk-colours';

import Component from '.';

expect.extend(createMatchers(emotion));

describe('CountdownTextarea', () => {
  let wrapper;

  describe('displays a countdown based on maxLength prop', () => {
    it('contains countdown', () => {
      wrapper = shallow(<Component maxLength={250} />);
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('250');
    });    

    it('reduces countdown', () => {
      wrapper.setProps({ value: 'test' });
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('246');
    });
  });

  describe('displays count as expected', () => {
    it('correctly shows 198 when 198 remaining', () => {
      wrapper = shallow(<Component value="Test" maxLength={202} />);
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('198');
    });

    it('correctly shows -2 as count when 2 over', () => {
      wrapper.setProps({ maxLength: 2 });
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('-2');
    });
  });

  describe('sets styles as expected', () => {
    it('sets color and font-weight when overflowing', () => {
      expect(wrapper).toHaveStyleRule('color', ERROR_COLOUR);
      expect(wrapper).toHaveStyleRule('font-weight', '800');
    });

    it('does not set color and font-weight when not overflowing', () => {
      wrapper.setProps({ maxLength: 5 });
      expect(wrapper).not.toHaveStyleRule('color', ERROR_COLOUR);
      expect(wrapper).not.toHaveStyleRule('font-weight', '800');
    });
  });

  describe('maxLengths to zero when positiveOnly set', () => {
    it('limits countdown value by maxLength', () => {
      wrapper = shallow(<Component value="Test" maxLength={2} positiveOnly />);
      expect(wrapper.find('StyledCountdown').childAt(0).text()).toBe('0');
    });
  });

  describe('manages maxLength prop as expected', () => {
    it('sets maxLength prop if sent', () => {
      wrapper = shallow(<Component value="Test" maxLength={10} />);
      expect(wrapper.find('StyledTextAreaField').prop('maxLength')).toBe(10);
    });
    it('does not set maxLength prop if not sent', () => {
      wrapper.setProps({ noMaxLengthAttr: true });
      expect(wrapper.find('StyledTextAreaField').prop('maxLength')).toBe(null);
    });
  });

  it('omits countdown field when no maxLength given', () => {
    wrapper = shallow(<Component value="Test" />);
    expect(wrapper.find('StyledCountdown').exists()).toBe(false);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
