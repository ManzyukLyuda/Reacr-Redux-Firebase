import * as Actions from './index';

describe('actions', () => {
	it('create USER_LOG_IN action', () => {
		const expectedAction = {
			type: 'USER_LOG_IN',
			user: 'user@gmail.com',
		};
		expect(Actions.userLogIn('user@gmail.com')).toEqual(expectedAction);
	});

	it('create USER_LOG_OUT action', () => {
		const expectedAction = {
			type: 'USER_LOG_OUT',
		};
		expect(Actions.userLogOut()).toEqual(expectedAction);
	});

	it('create GET_USERS action', () => {
		const expectedAction = {
			type: 'GET_USERS',
			payload: [],
		};
		expect(Actions.usersLoaded([])).toEqual(expectedAction);
	});
	it('create UPDATE_TODOS action', () => {
		const expectedAction = {
			type: 'UPDATE_TODOS',
			payload: [],
		};
		expect(Actions.updateTodosFromFirebase([])).toEqual(expectedAction);
	});
	it('create FIREBASE_START_LOADING action', () => {
		const expectedAction = {
			type: 'FIREBASE_START_LOADING',
			payload: true,
		};
		expect(Actions.firebaseStartLoading()).toEqual(expectedAction);
	});
	it('create FIREBASE_END_LOADING action', () => {
		const expectedAction = {
			type: 'FIREBASE_END_LOADING',
			payload: false,
		};
		expect(Actions.firebaseEndLoading()).toEqual(expectedAction);
  });
  it('create FIREBASE_GET_ERROR action', () => {
		const expectedAction = {
			type: 'FIREBASE_GET_ERROR',
			payload: {
        code: '123', 
        message: 'error'
      }
		};
		expect(Actions.firebaseGetError({
      code: '123', 
      message: 'error'
    })).toEqual(expectedAction);
  });
  it('create FIREBASE_CLEAR_ERROR action', () => {
		const expectedAction = {
			type: 'FIREBASE_CLEAR_ERROR'
		};
		expect(Actions.firebaseClearError()).toEqual(expectedAction);
  });
});
