import * as React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Router from './Router';
import { MemoryRouter } from 'react-router-dom';
import TestStoreWrapper from '../../../test/StoreWrapper';
import SignInForm from '../SignInForm/SignInFrom';
import Todo from '../Todo/Todo';
import configureStore from 'redux-mock-store';
import { Middleware, Dispatch, AnyAction } from 'redux';
import { Provider } from 'react-redux';

describe('<Router />', () => {
	it('render FormRout', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<MemoryRouter initialEntries={['/']}>
					<Router />
				</MemoryRouter>
			</TestStoreWrapper>
		);
		expect(wrapper).to.be.ok;
	});

	it('render <Form /> for anonymous users ', () => {
		const props = {
			isLogedIn: false,
			users: [],
			isLoading: false,
			dispatch: jest.fn(),
		};
		const middlewares:
			| Middleware<{}, any, Dispatch<AnyAction>>[]
			| undefined = [];
		const mockStore = configureStore(middlewares);
		const state = {
			logInUser: {
				isLogedIn: false,
			},
			isLoading: { isLoading: false },
			getUsers: { loading: false },
		};
		const store = mockStore(state);

		const wrapper = mount(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/']}>
					<Router />
				</MemoryRouter>
			</Provider>
		);

		expect(wrapper.find(SignInForm).length).to.be.equal(1);
	});

	it('render <Todo /> for non anonymous users ', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<MemoryRouter initialEntries={['/']}>
					<Router />
				</MemoryRouter>
			</TestStoreWrapper>
		);
		expect(wrapper.find(Todo).length).to.be.equal(1);
	});
});
