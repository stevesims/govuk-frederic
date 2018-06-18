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
    assert.equal(component.find('span').text(), '4');
    assert.end();
  }
);
