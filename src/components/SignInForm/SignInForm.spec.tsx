import * as React from 'react';
import { mount, shallow } from 'enzyme'
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
			</TestStoreWrapper>
		).dive();

        expect(wrapper).toBeTruthy()
    })

    it('render two input filds', ()=>{
        const wrapper = mount( 
            <TestStoreWrapper>
                <SignUpFrom />
            </TestStoreWrapper>);

        expect(wrapper.find('input').length).toBe(2);
    })

    it('input filds should be empty by default', ()=>{
        const wrapper = mount( <TestStoreWrapper>
                                    <SignUpFrom />
                                </TestStoreWrapper>);

		expect(
			wrapper.find("input[name='email']").props().defaultValue
		).toBe('');
		expect(
			wrapper.find("input[name='password']").props().defaultValue
		).toBe('');
    })

    it('render one button', () => {
        const wrapper = mount( <TestStoreWrapper>
                                    <SignUpFrom />
                                </TestStoreWrapper>);

        expect(wrapper.find('button').length).toBe(1)
    })

    it('render error on submite empty form', async() => {
        await act(async () => {
            const { getByTestId, getAllByRole } = render(
                <TestStoreWrapper>
                   <SignUpFrom />
                </TestStoreWrapper>);
            await act(async () => {
                fireEvent.submit(getByTestId('submit'))
            })
            
            const errors = getAllByRole('alert');

            expect(errors.length).toBe(2);
        })
    })
})