import React from 'react';
import { mount, shallow } from 'enzyme';

import Table from '.';

const titles = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];
const rows = [
  ['Content 1-1', 'Content 1-2', 'Content 3', 'Content 4'],
  ['Content 2-1', 'Content 2-2', 'Content 2-3', 'Content 2-4'],
  ['Content 3-1', 'Content 3-2', 'Content 3-3', 'Content 3-4'],
];
const names = ['one', 'two', 'three', 'four'];

describe('Table: Component renders rows with title header', assert => {
  shallow(<Table titles={titles} rows={rows} />);
  assert.end();
});

describe('Table: Component renders rows with header column', assert => {
  // use `mount` to render, as a `shallow` won't allow the `th` to be found
  let wrapper = mount(<Table rowIncludesHeading rows={[['title', 'value', 'value-2']]} />);

  assert.ok(wrapper.find('tbody th').length, 'some THs found');
  assert.notOk(wrapper.find('thead').exists(), 'no thead found');

  // re-render with wider rows to get coverage
  wrapper = mount(<Table rowIncludesHeading rows={rows} />);

  assert.end();
});

describe('Table: Component can accept name and names props', assert => {
  // first of all, check that there's no names by default
  let wrapper = mount(<Table rows={rows} />);

  assert.notOk(wrapper.find('table').prop('name'), 'no name found on table');
  wrapper.find('td').forEach(td => assert.notOk(td.prop('name'), 'no name on td'));

  wrapper = mount(<Table rows={rows} name={'name'} names={names} />);

  const trs = wrapper.find('tr');

  assert.equal(wrapper.find('table').prop('name'), 'name', 'name found on table');
  trs.forEach(tr => {
    // disable false-positive rule - this is an access into an array of strings, not object access
    // eslint-disable-next-line security/detect-object-injection
    tr.find('td').forEach((td, index) => assert.equal(td.prop('name'), names[index], 'correct name for td'));
  });

  assert.end();
});

describe('Table: Component renders with flexible column styling (coverage)', assert => {
  // need to mount for this test, otherwise the emotion styling doesn't get evaluated
  mount(<Table titles={titles} rows={rows} flexibleColumns />);
  assert.end();
});
