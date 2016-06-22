import { generate } from 'shortid';

import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from '../actions/actionTypes';

export default function todos(state = [], {
  id,
  type,
  todoText,
}) {
  switch (type) {
    case ADD_TODO:
      return [
        {
          todoText,
          complete: false,
          id: generate(),
        },
        ...state.slice(),
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== id);

    case COMPLETE_TODO: {
      const index = state.findIndex(todo => todo.id === id);

      return [
        ...state.slice(0, index),
        {
          ...state[index],
          complete: !state[index].complete,
        },
        ...state.slice(index + 1),
      ];
    }

    default:
      return state;
  }
}
