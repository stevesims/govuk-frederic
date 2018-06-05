import test from 'tape';
import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

test(
  'RemoveButton: Component renders with no properties',
  assert => {
    mount(<Component />);
    assert.end();
  }
);
