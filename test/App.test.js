import test from 'tape';
import React from 'react';
import sd from 'skin-deep';

import App from '../src/components/App';

test('App Component', assert => {
  const tree = sd.shallowRender(<App todos={[]} dispatch={() => {}} />);

  assert.equal(
    tree.subTree('div').props.className,
    'site-container',
    'App should render a div with a className of: "site-container"'
  );

  assert.end();
});
