import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { render, fireEvent, act } from '@testing-library/react';
import SignInForm from './SignUpForm';
import TestStoreWrapper from '../../../test/StoreWrapper';

describe('<SignInForm />', () => {
	it('render <SignInForm />', () => {
		const wrapper = shallow(
			<TestStoreWrapper>
				<SignInForm />
			</TestStoreWrapper>
		);

		expect(wrapper).to.be.ok;
	});

	it('render three input filds', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<SignInForm />
			</TestStoreWrapper>
		);

		expect(wrapper.find('input').length).to.be.equal(3);
	});

	it('input filds should be empty by default', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<SignInForm />
			</TestStoreWrapper>
		);

		expect(
			wrapper.find("input[name='email']").props().defaultValue
		).to.equal('');
		expect(
			wrapper.find("input[name='password']").props().defaultValue
		).to.equal('');
		expect(
			wrapper.find("[name='passwordConfirmation']").props().defaultValue
		).to.equal('');
	});

	it('render one button', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<SignInForm />
			</TestStoreWrapper>
		);

		expect(wrapper.find('button').length).to.equal(1);
	});

	it('render error on submite empty form', async () => {
		const { getByTestId, getAllByRole } = render(
			<TestStoreWrapper>
				<SignInForm />
			</TestStoreWrapper>
		);
		await act(async () => {
			fireEvent.submit(getByTestId('submit'));
		});

		expect(getAllByRole('alert').length).to.be.equal(2);
	});
});
