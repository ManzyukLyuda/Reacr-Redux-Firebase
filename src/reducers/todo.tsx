import ToDo from '../models/ToDo';
import actionTypes from './actionTypes';

export interface UpdateTodos {
	type: typeof actionTypes.todos.UPDATE_TODOS;
	payload?: ToDo[];
}
type Action = UpdateTodos;

export const todo = (state: ToDo | undefined, action: Action) => {
	switch (action.type) {
		case actionTypes.todos.UPDATE_TODOS:
			return {
				...state,
				comments: state?.comments ?? [],
				collaborators: state?.collaborators ?? [],
			};

		default:
			return state;
	}
};


