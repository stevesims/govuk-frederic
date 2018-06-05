import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

test(
  'Spinner: renders with no properties',
  assert => {
    shallow(<Component />);
    assert.end();
  }
);

test(
  'Spinner: renders with visible',
  assert => {
    shallow(<Component visible />);
    assert.end();
  }
);
