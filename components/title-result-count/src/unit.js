import React from 'react';
import { shallow } from 'enzyme';

import Component from '.';

describe('TitleResultCount: Component renders with no properties', assert => {
  shallow(<Component>Title</Component>);
  assert.end();
});

describe('TitleResultCount: Component renders with a count', assert => {
  shallow(<Component count={3}>Title</Component>);
  assert.end();
});
