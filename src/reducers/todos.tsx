import ToDo from '../models/ToDo';
import { todo } from './todo';
import actionTypes from './actionTypes';

export interface UpdateTodos {
	type: typeof actionTypes.todos.UPDATE_TODOS;
	payload: ToDo[];
}
type Action = UpdateTodos;

type State = ToDo[];

export const initialState: State = [];

export const todos = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.todos.UPDATE_TODOS:
			return action.payload.map((t: ToDo) => todo(t, action));

		case 'USER_LOG_OUT':
			return initialState;
		default:
			return state;
	}
};

