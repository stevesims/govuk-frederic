import React from 'react';
import { shallow } from 'enzyme';

import DistractionFree from '.';

describe('DistractionFree: renders with no properties', assert => {
  shallow(<DistractionFree />);
  assert.end();
});

describe('DistractionFree: renders with visible', assert => {
  shallow(<DistractionFree visible />);
  assert.end();
});
