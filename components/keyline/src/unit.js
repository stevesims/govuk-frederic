import React from 'react';
import { mount } from 'enzyme';

import Keyline from '.';

describe('Keyline: Component renders with no properties', assert => {
  mount(<Keyline />);
  assert.end();
});

describe('Keyline: Component renders with button inlineBlock', assert => {
  mount(<Keyline inlineBlock />);
  assert.end();
});

describe('Keyline: Component renders with borderColor', assert => {
  mount(<Keyline borderColor="red" />);
  assert.end();
});
