import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('ResultCountTitle: Component renders with no properties', assert => {
  shallow(<Component />);
  assert.end();
});
