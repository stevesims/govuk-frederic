import React from 'react';
import { shallow } from 'enzyme';

import Count from '.';

describe('Component - Count renders', assert => {
  shallow(<Count />);
  assert.end();
});

describe('Component - Count displays number passed in correctly', assert => {
  const component = shallow(<Count value={4} />);
  assert.equal(component.find('span').text(), '4');
  assert.end();
});
