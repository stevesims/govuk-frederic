import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Component from '.';

describe('OpenButton: Component renders with no properties', assert => {
  mount(<Component />);
  assert.end();
});

describe('OpenButton: Component renders when open', assert => {
  mount(<Component open />);
  assert.end();
});

describe('OpenButton: Component onChange event is called when clicked', assert => {
  const handleClick = sinon.spy();
  const wrapper = shallow(<Component onChange={handleClick} />);
  wrapper.simulate('click');
  assert.equal(handleClick.callCount, 1);

  // eslint disable justification:
  // "path traversal attack"
  // https://www.owasp.org/index.php/Path_Traversal
  // .open is not a call to fs, and args[0] would never be equal to require('fs')
  assert.equal(
    handleClick.getCall(0).args[0].open,
    true, // eslint-disable-line security/detect-non-literal-fs-filename
  );
  assert.end();
});
