import test from 'tape';
import React from 'react';
import sd from 'skin-deep';

import Nav from '../src/components/Nav';

test('Nav Component', assert => {
  const tree = sd.shallowRender(
    <Nav />
  );

  assert.notEqual(
    tree.subTree('nav'),
    false,
    'Should contain a <nav> element'
  );

  assert.end();
});
