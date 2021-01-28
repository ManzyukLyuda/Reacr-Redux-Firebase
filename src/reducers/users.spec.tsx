import { getUsers, initialState } from './users';
import { expect } from 'chai';

describe('users reducer', () => {
	it('return the initial state', () => {
		expect(getUsers(undefined, { type: '', payload: [] })).deep.equal(
			initialState
		);
	});
	it('handle action GET_USERS', () => {
		const expectedState = {
			users: [],
		};

		expect(
			getUsers(initialState, { type: 'GET_USERS', payload: [] })
		).deep.equal(expectedState);
	});
	// return state
});
