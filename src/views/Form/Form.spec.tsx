import * as React from 'react'
import { expect } from 'chai';
import { mount } from 'enzyme'
import FormRout from './Form';
import { MemoryRouter } from 'react-router-dom';
import TestStoreWrapper from '../../../test/StoreWrapper'
import SignInForm from '../../components/SignInForm/SignInFrom';
import SignUpFrom from '../../components/SignUpForm/SignUp'

describe('<FormRout />', ()=>{

    it('render FormRout', ()=>{
        const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['/']}>
                    <FormRout />
                </MemoryRouter>
            </TestStoreWrapper>
       );
        expect(wrapper).to.be.ok
    })

    it('render SignInForm by default', ()=>{
        const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['/']}>
                    <FormRout />
                </MemoryRouter>
            </TestStoreWrapper>
       );

        expect(wrapper.find(SignInForm).length).to.be.equal(1)
    })

    it('render SignUpForm when selected', ()=>{
        const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['//signup']}>
                    <FormRout />
                </MemoryRouter>
            </TestStoreWrapper>
       );

       expect(wrapper.find(SignUpFrom).length).to.be.equal(1)
    })

    it('render SignInForm when selected', ()=>{
        const wrapper = mount(
            <TestStoreWrapper>
                <MemoryRouter initialEntries={['//signin']}>
                    <FormRout />
                </MemoryRouter>
            </TestStoreWrapper>
       );

       expect(wrapper.find(SignInForm).length).to.be.equal(1)
    })

})