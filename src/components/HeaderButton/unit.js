import test from 'tape';
import React from 'react';
import { mount } from 'enzyme';

import HeaderButton from '.';

test(
  'HeaderButton: Component renders with no properties',
  assert => {
    mount(<HeaderButton />);
    assert.end();
  }
);

test(
  'HeaderButton: Component renders with button active',
  assert => {
    mount(<HeaderButton active />);
    assert.end();
  }
);

test(
  'HeaderButton: Component renders with button disabled',
  assert => {
    mount(<HeaderButton disabled />);
    assert.end();
  }
);
