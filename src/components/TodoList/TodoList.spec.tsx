import * as React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme';
import TodosList from './TodoList';
import './TodoList.css'
import TestStoreWrapper from '../../../test/StoreWrapper';
import configureStore from 'redux-mock-store'
import { Middleware, Dispatch, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { FirebaseContext } from '../../services/firebase-service';

const app = {
	api: {
		signUpUser: () =>
			new Promise(resolve =>  resolve),
		signInUser: () =>
			new Promise(resolve => resolve),
		signOut: () => {},
		getTodos: () => {},
		getUsers: () => {},
		addTodo: () => {},
		deleteTodo: () => {},
		toggleTodo: () => {},
		addComment: () => {},
		addCollaborator: () => {},
	},
};
// const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = [];

  describe('<TodosList />', () => {
    it('render TodosList', () => {
      const props = { 
        onDeleteItem: () => null,
        onToggleItem: () => null,
     }

       const wrapper = mount(
			<TestStoreWrapper>
				<TodosList {...props} />
			</TestStoreWrapper>
		);
        expect(wrapper).to.be.ok
      })

    it('render one <ul>', ()=>{
        const props = { 
            onDeleteItem: () => null,
            onToggleItem: () => null,
         }
        const wrapper = mount( <TestStoreWrapper><TodosList {...props} /></TestStoreWrapper> );

        expect(wrapper.find('.todo-list').length).to.equal(1)
    })

    it('render empty list', () => {
		const mockStore = configureStore([]);
		const store = mockStore({ todos: [] });
		const props = {
			onDeleteItem: () => null,
			onToggleItem: () => null,
		};
		const wrapper = mount(
			<Provider store={store}>
				<FirebaseContext.Provider value={app}>
					<TodosList {...props} />
				</FirebaseContext.Provider>
			</Provider>
		);
		expect(wrapper.find('li').length).to.equal(0);
	})

    it('render one todo', () => {
        const props = { 
            onDeleteItem: () => null,
            onToggleItem: () => null,
         }
        const wrapper = mount(<TestStoreWrapper><TodosList {...props} /></TestStoreWrapper>)
        expect(wrapper.find('li').length).to.equal(1)
      })
  })