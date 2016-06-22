import test from 'tape';

import { addTodo, deleteTodo, completeTodo } from '../src/actions/todoActions';

test('Todo actions', assert => {
  assert.deepEqual(
    addTodo('Wash Dishes'),
    { type: 'ADD_TODO', todoText: 'Wash Dishes' },
    'Creates an add todo action'
  );

  assert.deepEqual(
    deleteTodo('test_id'),
    { type: 'DELETE_TODO', id: 'test_id' },
    'Creates a delete todo action'
  );

  assert.deepEqual(
    completeTodo('test_id'),
    { type: 'COMPLETE_TODO', id: 'test_id' },
    'Creates a complete todo action'
  );

  assert.end();
});
