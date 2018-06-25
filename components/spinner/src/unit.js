import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('Spinner: renders with no properties', assert => {
  shallow(<Component />);
  assert.end();
});

describe('Spinner: renders with visible', assert => {
  shallow(<Component visible />);
  assert.end();
});
