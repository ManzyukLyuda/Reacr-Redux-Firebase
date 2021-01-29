import actionTypes from "./actionTypes";

interface State {
            email: string | null,
            isLogedIn: boolean;
        }

export const initialState = {
	email: null,
	isLogedIn: false,
};

export interface ActionLogIn {type: typeof actionTypes.logIn.USER_LOG_IN, user: string};
export interface ActionLogOut {type: typeof actionTypes.logIn.USER_LOG_OUT, user?: null};
type Action = ActionLogIn | ActionLogOut;

export const logInUser = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.logIn.USER_LOG_IN:
			return {
				email: action.user,
				isLogedIn: true,
			};

		case actionTypes.logIn.USER_LOG_OUT:
			return initialState;

		default:
			return state;
	}
};
