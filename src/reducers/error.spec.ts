import { initialState, firebaseError } from './error';
import { expect } from 'chai';

describe('firebase error ', () => {
	it('return the initial state', () => {
		expect(
			firebaseError(initialState, { type: '', payload: null })
		).deep.equal(initialState);
	});

	it('handle action FIREBASE_GET_ERROR', () => {
		const expectedState = { code: '123', message: 'error' };
		expect(
			firebaseError(initialState, {
				type: 'FIREBASE_GET_ERROR',
				payload: { code: '123', message: 'error' },
			})
		).deep.equal(expectedState);
	});

	it('handle action FIREBASE_CLEAR_ERROR', () => {
		expect(
			firebaseError(initialState, {
				type: 'FIREBASE_CLEAR_ERROR',
				payload: null,
			})
		);
	});
});
