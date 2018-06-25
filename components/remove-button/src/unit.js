import React from 'react';
import { mount } from 'enzyme';

import Component from '.';

describe('RemoveButton: Component renders with no properties', assert => {
  mount(<Component />);
  assert.end();
});
