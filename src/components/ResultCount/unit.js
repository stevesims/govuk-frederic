import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

test(
  'ResultCount: Component renders with no properties',
  assert => {
    shallow(<Component />);
    assert.end();
  }
);

test(
  'ResultCount: Component renders with count',
  assert => {
    // TODO: assert child text/children is present
    // TODO: how to unit something that is only a CSSinJS component (sc or glamorous)
    shallow(<Component>8008</Component>);
    assert.end();
  }
);
