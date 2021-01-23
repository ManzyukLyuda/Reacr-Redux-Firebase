import * as React from 'react';
import { mount, shallow } from 'enzyme'
import { expect } from 'chai';
import { render, fireEvent, act, cleanup } from "@testing-library/react";
import SignUpFrom from './SignInFrom';
import TestStoreWrapper from "../../../test/StoreWrapper"

describe('<SignUpForm />', ()=>{
    afterEach(()=>{
        cleanup();
    })

    it('render <SignInForm />', ()=>{
        const wrapper = shallow(
            <TestStoreWrapper>
                <SignUpFrom />
            </TestStoreWrapper>);

        expect(wrapper).to.be.ok
    })

    it('render two input filds', ()=>{
        const wrapper = mount( 
            <TestStoreWrapper>
                <SignUpFrom />
            </TestStoreWrapper>);

        expect(wrapper.find('input').length).to.be.equal(2);
    })

    it('input filds should be empty by default', ()=>{
        const wrapper = mount( <TestStoreWrapper>
                                    <SignUpFrom />
                                </TestStoreWrapper>);

        expect(wrapper.find('#email').props().defaultValue).to.equal('');
        expect(wrapper.find('#password').props().defaultValue).to.equal('');
    })

    it('render one button', () => {
        const wrapper = mount( <TestStoreWrapper>
                                    <SignUpFrom />
                                </TestStoreWrapper>);

        expect(wrapper.find('button').length).to.equal(1)
    })

    it('render error on submite empty form', async () => {
        await act(async () => {
            const { getByTestId, getAllByRole } = render(
                <TestStoreWrapper>
                   <SignUpFrom />
                </TestStoreWrapper>);
            await act(async () => {
                fireEvent.submit(getByTestId('submit'))
            })
            
            const errors = getAllByRole('alert');

            expect(errors.length).to.be.equal(2);
        })
    })

    it('render error on submite form with wrong email format', async () => {
        await act(async () => {
            const { getByTestId, getAllByRole, getByLabelText } = render(
                <TestStoreWrapper>
                   <SignUpFrom />
                </TestStoreWrapper>);
            const input = getByLabelText('Email');
            await act(async () => {
                await fireEvent.change(input, { target: { value: 'user' } })
              })
            await act(async () => {
                fireEvent.submit(getByTestId('submit'))
            })
            
            const errors = getAllByRole('alert');

            expect(errors.length).to.be.equal(2);
            expect(errors[0].textContent).to.be.equal('Entered value does not match email format');
            expect(errors[1].textContent).to.be.equal('Password is required');
        })

    })

    it('render error on submite form with only email', async () => {
        await act(async () => {
            const { getByTestId, getByLabelText, getAllByRole, getByRole } = render(
                <TestStoreWrapper>
                   <SignUpFrom />
                </TestStoreWrapper>);
            const input = getByLabelText('Email');
            await act(async () => {
                await fireEvent.change(input, { target: { value: 'user@user.com' } })
              })
            await act(async () => {
                fireEvent.submit(getByTestId('submit'))
            })
            
            expect(getAllByRole('alert').length).to.be.equal(1);
            expect(getByRole('alert').textContent).to.be.equal('Password is required');
        })
       
    })


})