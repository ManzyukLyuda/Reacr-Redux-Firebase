import actionTypes from './actionTypes';

interface State {
	isLoading: boolean;
}

const initialState = {
	isLoading: false,
};

interface ActionFirebaseStartLoading {
	type: typeof actionTypes.loading.FIREBASE_START_LOADING;
	payload: null;
}
interface ActionFirebaseENDLoading {
	type: typeof actionTypes.loading.FIREBASE_END_LOADING;
	payload: null;
}
type Action = ActionFirebaseStartLoading | ActionFirebaseENDLoading;

export const isLoading = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.loading.FIREBASE_START_LOADING:
			return {
				isLoading: true,
			};
		case actionTypes.loading.FIREBASE_END_LOADING:
			return {
				isLoading: false,
			};
		default:
			return state;
	}
};
