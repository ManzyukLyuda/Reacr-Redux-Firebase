import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Todo from './Todo';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TestStoreWrapper from '../../../test/StoreWrapper';

describe('<Todo />', () => {
	it('render <Todo />', () => {
		const wrapper = shallow(
			<TestStoreWrapper>
				<Todo />
			</TestStoreWrapper>
		);
		expect(wrapper).toBeTruthy();
	});

	it('render one H1 title', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<Todo />
			</TestStoreWrapper>
		);
		expect(wrapper.find('h1').length).toBe(1);
	});

	it('render one Sign Out button', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<Todo />
			</TestStoreWrapper>
		);
		expect(wrapper.find('button.link').length).toBe(1);
		expect(wrapper.find('button.link').first().text()).toBe('Sign Out');
	});

	it('render one TodoForm', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<Todo />
			</TestStoreWrapper>
		);
		expect(wrapper.find(TodoForm).length).toBe(1);
	});

	it('render one TodoList', () => {
		const wrapper = mount(
			<TestStoreWrapper>
				<Todo />
			</TestStoreWrapper>
		);
		expect(wrapper.find(TodoList).length).toBe(1);
	});
});
