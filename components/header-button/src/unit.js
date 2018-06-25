import React from 'react';
import { mount } from 'enzyme';

import HeaderButton from '.';

describe('HeaderButton: Component renders with no properties', assert => {
  mount(<HeaderButton />);
  assert.end();
});

describe('HeaderButton: Component renders with button active', assert => {
  mount(<HeaderButton active />);
  assert.end();
});

describe('HeaderButton: Component renders with button disabled', assert => {
  mount(<HeaderButton disabled />);
  assert.end();
});
