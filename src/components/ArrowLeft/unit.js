import test from 'tape';
import React from 'react';
import { mount, shallow } from 'enzyme';

import ArrowLeft from '.';

test(
  'ArrowLeft: ArrowLeft renders with no properties',
  assert => {
    mount(<ArrowLeft />);
    assert.end();
  }
);

test(
  'ArrowLeft: ArrowLeft renders with a title',
  assert => {
    shallow(<ArrowLeft title="Example" />);
    assert.end();
  }
);

test(
  'ArrowLeft: ArrowLeft renders with a title and colour fill',
  assert => {
    shallow(<ArrowLeft fill="red">Title</ArrowLeft>);
    assert.end();
  }
);

test(
  'ArrowLeft: ArrowLeft support setting color',
  assert => {
    mount(<ArrowLeft color="purple" />);
    assert.end();
  }
);
