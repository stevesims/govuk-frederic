import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
// the component
import CountdownTextarea from '.';

test(
  'Component - CountdownTextarea displays a countdown based on maxLength prop',
  t => {
    t.plan(2);
    const wrapper = shallow(<CountdownTextarea maxLength={250} />);

    t.equal(
      wrapper.find('.countdown-textarea--countdown').text(),
      '250',
      'contains countdown'
    );

    wrapper.setProps({ value: 'test' });
    t.equal(
      wrapper.find('.countdown-textarea--countdown').text(),
      '246',
      'reduces countdown'
    );
  }
);

test(
  'Component - CountdownTextarea omits countdown field when no maxLength given',
  t => {
    t.plan(1);
    const wrapper = shallow(<CountdownTextarea value={'Test'} />);

    t.equal(
      wrapper.find('.countdown-textarea--countdown').exists(),
      false,
      'has no countdown'
    );
  }
);

test(
  "Component - CountdownTextarea sets 'over' class when overflowing",
  t => {
    t.plan(3);
    const wrapper = shallow(<CountdownTextarea value={'Test'} maxLength={2} />);

    t.ok(
      wrapper.hasClass('over'),
      'over class set'
    );
    t.equal(
      wrapper.find('.countdown-textarea--countdown').text(),
      '-2',
      'correctly shows -2 as count when 2 over'
    );
    wrapper.setProps({ maxLength: 250 });
    t.notOk(
      wrapper.hasClass('over'),
      'over class cleared'
    );
  }
);

test(
  'Component - CountdownTextarea maxLengths to zero when positiveOnly set',
  t => {
    t.plan(1);
    const wrapper = shallow(
      <CountdownTextarea value={'Test'} maxLength={2} positiveOnly />
    );

    t.equal(
      wrapper.find('.countdown-textarea--countdown').text(),
      '0',
      'countdown value limited by maxLength'
    );
  }
);

test(
  'Component - CountdownTextarea noMaxLengthAttr omits maxLength attribute',
  t => {
    t.plan(2);
    const wrapper = shallow(
      <CountdownTextarea value={'Test'} maxLength={10} />
    );

    t.ok(wrapper.find('[maxLength]').exists(), 'maxLength found as expected');

    wrapper.setProps({ noMaxLengthAttr: true });
    t.equal(
      wrapper.find('[maxLength]').prop('maxLength'),
      null,
      'no maxLength attribute set'
    );
  }
);
