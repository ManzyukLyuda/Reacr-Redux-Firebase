import * as React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme'
import ToDoPage from './Todo'
import TodoForm from '../../components/TodoForm/TodoForm'
import TodoList from '../../components/TodoList/TodoList'

describe('<ToDoPage />', ()=>{
    it('render <ToDoPage />', ()=>{
        const props = {
            user: {
                email: 'test@test.com',
                uid: '111'
            },
            todos: [], 
            users: [], 
            dispatch: jest.fn()
        }
        const wrapper = shallow( <ToDoPage {... props}/> );
        expect(wrapper).to.be.ok
    })

    it('render one H1 title', ()=>{
        const props = {
            user: {
                email: 'test@test.com',
                uid: '111'
            },
            todos: [], 
            users: [], 
            dispatch: jest.fn()
        }
        const wrapper = shallow( <ToDoPage {... props}/> );
        expect(wrapper.find('h1').length).to.be.equal(1)
    })

    it('render one Sign Out button', ()=>{
        const props = {
            user: {
                email: 'test@test.com',
                uid: '111'
            },
            todos: [], 
            users: [], 
            dispatch: jest.fn()
        }
        const wrapper = shallow( <ToDoPage {... props}/> );
        expect(wrapper.find('button').length).to.be.equal(1)
        expect(wrapper.find('button').first().text()).to.be.equal('Sign Out')
    })

    it('render one TodoForm', ()=>{
        const props = {
            user: {
                email: 'test@test.com',
                uid: '111'
            },
            todos: [], 
            users: [], 
            dispatch: jest.fn()
        }
        const wrapper = shallow( <ToDoPage {... props}/> );
        expect(wrapper.find(TodoForm).length).to.be.equal(1)
    })

    it('render one TodoList', ()=>{
        const props = {
            user: {
                email: 'test@test.com',
                uid: '111'
            },
            todos: [], 
            users: [], 
            dispatch: jest.fn()
        }
        const wrapper = shallow( <ToDoPage {... props}/> );
        expect(wrapper.find(TodoList).length).to.be.equal(1)
    })

    it('render one TodoList', ()=>{
        const props = {
            user: {
                email: 'test@test.com',
                uid: '111'
            },
            todos: [], 
            users: [], 
            dispatch: jest.fn()
        }
        const wrapper = shallow( <ToDoPage {... props}/> );
        expect(wrapper.find(TodoList).length).to.be.equal(1)
    })
})