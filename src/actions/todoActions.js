import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actionTypes';
import factory from './actionCreatorFactory';

export const addTodo = factory(ADD_TODO, 'todoText');
export const deleteTodo = factory(DELETE_TODO, 'id');
export const completeTodo = factory(COMPLETE_TODO, 'id');
