import test from 'tape';

import * as exports from '.';

test('index - ensure all items exported exist', assert => {
  Object.entries(exports).forEach(([key, value]) => {
    assert.notEqual(value, undefined, `${key} exported correctly`);
  });
  assert.end();
});
