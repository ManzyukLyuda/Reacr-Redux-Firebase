import * as React from 'react'
import { expect } from 'chai'
import { mount, render, shallow } from 'enzyme'
import TodosList from './TodoList';
import './TodoList.css'
import TestStoreWrapper from '../../../test/StoreWrapper';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { AnyAction, Dispatch, Middleware } from 'redux';


  describe('<TodosList />', () => {
    it('render TodosList', () => {
        const props = { 
            onDeleteItem: () => null,
            onToggleItem: () => null,
         }
        const wrapper = shallow(<TestStoreWrapper><TodosList {...props} /></TestStoreWrapper>);
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
        const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
        const mockStore = configureStore(middlewares)
        const store = mockStore({todos: []})
        const props = { 
            onDeleteItem: () => null,
            onToggleItem: () => null,
         }
        const wrapper = mount(<Provider store={store}><TodosList {...props} /></Provider>)
        expect(wrapper.find('li').length).to.equal(0)
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