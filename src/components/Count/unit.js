import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Count from '.';

test(
  'Component - Count renders',
  assert => {
    shallow(<Count/>);
    assert.end();
  }
);

test(
  'Component - Count displays number passed in correctly',
  assert => {
    const component = shallow(<Count value={4}/>);
    assert.equal(component.text(), '4');
    assert.ok(component.find('.result-count').exists(), 'default class set');
    assert.end();
  }
);

test(
  'Component - Count can override className',
  assert => {
    const component = shallow(<Count className={'test'}/>);
    assert.notOk(component.find('.result-count').exists(), 'default class not set');
    assert.ok(component.find('.test').exists(), 'class set');
    assert.end();
  }
);
