import test from 'tape';

import factory from '../src/actions/actionCreatorFactory';

test('Action Creator factory', assert => {
  const actionCreator = factory('TEST_TYPE', 'name', 'age');

  assert.equal(
    typeof actionCreator,
    'function',
    'Should return an action creator function of type "function"'
  );

  assert.deepEqual(
    actionCreator('Bob Burger', 25),
    { type: 'TEST_TYPE', name: 'Bob Burger', age: 25 },
    'Calling the action creator should return an action object'
  );

  assert.end();
});
