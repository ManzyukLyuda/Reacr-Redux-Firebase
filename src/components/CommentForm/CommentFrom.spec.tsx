import { mount, shallow } from 'enzyme';
import React from 'react';
import CommentForm from './CommentForm';
import { expect } from 'chai';
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
			<TestStoreWrapper>
				<CommentForm {...props} />{' '}
			</TestStoreWrapper>
		);

		expect(wrapper.find(CommentForm)).to.be.ok;
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
		expect(wrapper.find('form').length).to.equal(1);
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
		expect(wrapper.find('textarea').length).to.equal(1);
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

		expect(wrapper.find('textarea').props().defaultValue).to.equal('');
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

		expect(wrapper.find('button').length).to.equal(1);
	});
});
