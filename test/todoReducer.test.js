import test from 'tape';
import { isValid } from 'shortid';

import todos from '../src/reducers/todos';

test('Todos Reducer', assert => {
  const initialState = [{ todoText: 'Wash Dishes', complete: false, id: 'test_id' }];

  assert.equal(
    Array.isArray(todos(undefined, {})),
    true,
    'Returns the initial state'
  );

  assert.deepLooseEqual(
    todos([], { type: 'ADD_TODO', todoText: 'Wash Dishes' })[0],
    { todoText: 'Wash Dishes', complete: false, id: '' },
    'Returns state with added todo'
  );

  assert.deepEqual(
    todos(initialState, { type: 'DELETE_TODO', id: 'test_id' }),
    [],
    'Returns state with deleted todo'
  );

  assert.deepEqual(
    todos(initialState, { type: 'COMPLETE_TODO', id: 'test_id' }),
    [{ todoText: 'Wash Dishes', complete: true, id: 'test_id' }],
    'Returns state with completed todo'
  );

  assert.end();
});
