import * as React from 'react'
import { expect } from 'chai';
import { mount } from 'enzyme'
import Router from './Router';
import { MemoryRouter } from 'react-router-dom';
import TestStoreWrapper from '../../../test/StoreWrapper'
import SignInForm from '../../components/SignInForm/SignIn';
import Todo from '../Todo/Todo'
import Spinner from '../../components/Spinner/Spinner';

describe('<Router />', ()=>{

    it('render FormRout', ()=>{
        const props = {
            isLogedIn: false,
            users: [], 
            isLoading: false, 
            dispatch: jest.fn()
          };
        const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['/']}>
                    <Router {... props}/>
                </MemoryRouter>
            </TestStoreWrapper>
       );
        expect(wrapper).to.be.ok
    })

    it('render <Form /> for anonymous users ', ()=>{
        const props = {
            isLogedIn: false,
            users: [], 
            isLoading: false, 
            dispatch: jest.fn()
          };
          const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['/']}>
                    <Router {... props}/>
                </MemoryRouter>
            </TestStoreWrapper>
       );
       expect(wrapper.find(SignInForm).length).to.be.equal(1)
    })

    it('render <Todo /> for non anonymous users ', ()=>{
        const props = {
            isLogedIn: true,
            users:[],
            isLoading: false,
            dispatch: jest.fn()
          };
          const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['/']}>
                    <Router {... props}/>
                </MemoryRouter>
            </TestStoreWrapper>
       );
       expect(wrapper.find(Todo).length).to.be.equal(1)
    })


    it('render <Todo />  with Spiner for non anonymous users ', ()=>{
        const props = {
            isLogedIn: true,
            users:[],
            isLoading: true,
            dispatch: jest.fn()
          };
          const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['/']}>
                    <Router {... props}/>
                </MemoryRouter>
            </TestStoreWrapper>
       );
       expect(wrapper.find(Spinner).length).to.be.equal(1)
    })

})