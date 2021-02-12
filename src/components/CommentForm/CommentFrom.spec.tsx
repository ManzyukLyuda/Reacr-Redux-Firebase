import { mount, shallow } from 'enzyme';
import React from 'react';
import CommentForm from './CommentForm';
import TestStoreWrapper from '../../../test/StoreWrapper';

describe('<CommentForm />', () => {
	it('render CommentForm', () => {
		const props = {
			todoId: 'tets',
			user: {
				email: 'test@user.com',
				uid: 'test',
			},
		};
		const wrapper = shallow(
			// <TestStoreWrapper>
			<CommentForm {...props} />
			// </TestStoreWrapper>
		);

		expect(wrapper.find(CommentForm)).toBeTruthy();
	});

	it('render one form', () => {
		const props = {
			todoId: 'tets',
			user: {
				email: 'test@user.com',
				uid: 'test',
			},
		};
		const wrapper = mount(
			<TestStoreWrapper>
				<CommentForm {...props} />{' '}
			</TestStoreWrapper>
		);
		expect(wrapper.find('form').length).toBe(1);
	});

	it('rrender one textarea', () => {
		const props = {
			todoId: 'tets',
			user: {
				email: 'test@user.com',
				uid: 'test',
			},
		};
		const wrapper = mount(
			<TestStoreWrapper>
				<CommentForm {...props} />{' '}
			</TestStoreWrapper>
		);
		expect(wrapper.find('textarea').length).toBe(1);
	});

	it('textarea should start empty', () => {
		const props = {
			todoId: 'tets',
			user: {
				email: 'test@user.com',
				uid: 'test',
			},
		};
		const wrapper = mount(
			<TestStoreWrapper>
				<CommentForm {...props} />{' '}
			</TestStoreWrapper>
		);

		expect(wrapper.find('textarea').props().defaultValue).toBe('');
	});

	it('render one button', () => {
		const props = {
			todoId: 'tets',
			user: {
				email: 'test@user.com',
				uid: 'test',
			},
		};
		const wrapper = mount(
			<TestStoreWrapper>
				<CommentForm {...props} />{' '}
			</TestStoreWrapper>
		);

		expect(wrapper.find('button').length).toBe(1);
	});
});
