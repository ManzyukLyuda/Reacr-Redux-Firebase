import * as React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import AuthForm from './AuthForm';
import { MemoryRouter } from 'react-router-dom';
import TestStoreWrapper from '../../../test/StoreWrapper';
import SignInForm from '../SignInForm/SignInFrom';
import SignUpFrom from '../SignUpForm/SignUpForm';

describe('<AuthForm />', () => {
	it('render AuthForm', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<MemoryRouter initialEntries={['/']}>
					<AuthForm />
				</MemoryRouter>
			</TestStoreWrapper>
		);
		expect(wrapper).to.be.ok;
	});

	it('render SignInForm by default', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<MemoryRouter initialEntries={['/']}>
					<AuthForm />
				</MemoryRouter>
			</TestStoreWrapper>
		);

		expect(wrapper.find(SignInForm).length).to.be.equal(1);
	});

	it('render SignUpForm when selected', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<MemoryRouter initialEntries={['//signup']}>
					<AuthForm />
				</MemoryRouter>
			</TestStoreWrapper>
		);

		expect(wrapper.find(SignUpFrom).length).to.be.equal(1);
	});

	it('render SignInForm when selected', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<MemoryRouter initialEntries={['//signin']}>
					<AuthForm />
				</MemoryRouter>
			</TestStoreWrapper>
		);

		expect(wrapper.find(SignInForm).length).to.be.equal(1);
	});
});
