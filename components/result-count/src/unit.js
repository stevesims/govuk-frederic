import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('ResultCount: Component renders with no properties', assert => {
  shallow(<Component />);
  assert.end();
});

describe('ResultCount: Component renders with count', assert => {
  // TODO: assert child text/children is present
  // TODO: how to unit something that is only a CSSinJS component (sc or emotion)
  shallow(<Component>8008</Component>);
  assert.end();
});
