import * as React from 'react'
import { expect } from 'chai';
import { mount, shallow } from 'enzyme'
import ToDoPage from './Todo'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoList from '../../components/TodoList/TodoList'
import TestStoreWrapper from "../../../test/StoreWrapper"

describe('<ToDoPage />', ()=>{
    it('render <ToDoPage />', ()=>{
        const wrapper = shallow( <TestStoreWrapper>
                                    <ToDoPage /> 
                                </TestStoreWrapper>);
        expect(wrapper).to.be.ok
    })

    it('render one H1 title', ()=>{
        const wrapper = mount( <TestStoreWrapper><ToDoPage /></TestStoreWrapper> );
        expect(wrapper.find('h1').length).to.be.equal(1)
    })

    it('render one Sign Out button', ()=>{
        const wrapper = mount( <TestStoreWrapper><ToDoPage/></TestStoreWrapper> );
        expect(wrapper.find('button.link').length).to.be.equal(1)
        expect(wrapper.find('button.link').first().text()).to.be.equal('Sign Out')
    })

    it('render one TodoForm', ()=>{
        const wrapper = mount( <TestStoreWrapper><ToDoPage/></TestStoreWrapper>  );
        expect(wrapper.find(TodoForm).length).to.be.equal(1)
    })

    it('render one TodoList', ()=>{
        const wrapper = mount( <TestStoreWrapper><ToDoPage/></TestStoreWrapper> );
        expect(wrapper.find(TodoList).length).to.be.equal(1)
    })

})