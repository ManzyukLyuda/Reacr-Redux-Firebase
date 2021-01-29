import { initialState, todos } from './todos';
import { expect } from 'chai';

describe('todos reducers', () => {
	it('returns the initial state', () => {
		expect(todos(undefined, { type: '', payload: [] })).deep.equal(
			initialState
		);
	});

	it('handle action UPDATE_TODOS', () => {
		const initialState = [
			{
				id: 'test',
				name: 'task',
				description: 'description',
				completed: false,
				assignedTo: 'user',
				collaborators: [],
				comments: [],
			},
		];
		const expectedState = [
			{
				id: 'test',
				name: 'task',
				description: 'description',
				completed: false,
				assignedTo: 'user',
				collaborators: ['user@user.com'],
				comments: [
					{
						id: 'tetsComment',
						author: 'yser@test.com',
						comment: 'tets comment',
						parentTodo: 'test',
					},
				],
			},
		];
		expect(
			todos(initialState, {
				type: 'UPDATE_TODOS',
				payload: [
					{
						id: 'test',
						name: 'task',
						description: 'description',
						completed: false,
						assignedTo: 'user',
						collaborators: ['user@user.com'],
						comments: [
							{
								id: 'tetsComment',
								author: 'yser@test.com',
								comment: 'tets comment',
								parentTodo: 'test',
							},
						],
					},
				],
			})
		).deep.equal(expectedState);
	});
});
