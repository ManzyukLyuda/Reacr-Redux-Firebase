import { ErrorData } from '../models/SignUpForm';
import actionTypes from './actionTypes';

interface State {
	firebaseError: ErrorData | null;
}

export const initialState = {
	firebaseError: null,
};

export interface ActionFirebaseGetError {
	type: typeof actionTypes.error.FIREBASE_GET_ERROR;
	payload: ErrorData;
}
export interface ActionFirebaseClearError {
	type: typeof actionTypes.error.FIREBASE_CLEAR_ERROR;
	payload: null;
}

type Action = ActionFirebaseGetError | ActionFirebaseClearError;

export const firebaseError = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.error.FIREBASE_GET_ERROR:
			return action.payload;
		case actionTypes.error.FIREBASE_CLEAR_ERROR:
			return initialState;
		default:
			return state;
	}
};
