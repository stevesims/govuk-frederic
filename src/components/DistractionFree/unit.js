import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import DistractionFree from '.';

test(
  'DistractionFree: renders with no properties',
  assert => {
    shallow(<DistractionFree />);
    assert.end();
  }
);

test(
  'DistractionFree: renders with visible',
  assert => {
    shallow(<DistractionFree visible />);
    assert.end();
  }
);
