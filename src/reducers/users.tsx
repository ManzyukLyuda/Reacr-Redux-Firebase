import User from '../models/User';
import actionTypes from './actionTypes';

type State = {
	users: User[];
};

export const initialState = {
	users: [],
};

export interface ActionGetUsers {
	type: typeof actionTypes.users.GET_USERS;
	payload: User[];
}
type Action = ActionGetUsers;

export const getUsers = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.users.GET_USERS:
			return {
				users: action.payload,
			};
		case 'USER_LOG_OUT':
			return initialState;
		default:
			return state;
	}
};



