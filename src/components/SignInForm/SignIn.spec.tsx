import * as React from 'react';
import  { shallow } from 'enzyme';
import { expect } from 'chai';
import { render, fireEvent, act } from "@testing-library/react";
import SignInForm from './SignIn';

describe('<SignInForm />', ()=>{

    it('render <SignInForm />', ()=>{
        const wrapper = shallow(<SignInForm />);

        expect(wrapper).to.be.ok
    })

    it('render three input filds', ()=>{
        const wrapper = shallow(<SignInForm />);

        expect(wrapper.find('input').length).to.be.equal(3);
    })

    it('input filds should be empty by default', ()=>{
        const wrapper = shallow(<SignInForm />);

        expect(wrapper.find('#email').props().defaultValue).to.equal('');
        expect(wrapper.find('#password1').props().defaultValue).to.equal('');
        expect(wrapper.find('#password2').props().defaultValue).to.equal('');
    })

    it('render one button', () => {
        const wrapper = shallow(<SignInForm  />)

        expect(wrapper.find('button').length).to.equal(1)
    })

    it('render error on submite empty form', async () => {
        const { getByTestId, getAllByRole } = render(<SignInForm  />)
        await act(async () => {
            fireEvent.submit(getByTestId('submit'))
        })

        expect(getAllByRole('alert').length).to.be.equal(2);
    })

    it('render error on submite form with wrong email format', async () => {
        const { getByTestId, getByLabelText, getAllByRole } = render(<SignInForm  />)
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
        expect(errors[1].textContent).to.be.equal('You must specify a password');
    })

    it('render error on submite form with only email', async () => {
        const { getByTestId, getByLabelText, getAllByRole, getByRole } = render(<SignInForm  />)
        const input = getByLabelText('Email');
        await act(async () => {
            await fireEvent.change(input, { target: { value: 'user@user.com' } })
          })
        await act(async () => {
            fireEvent.submit(getByTestId('submit'))
        })

        expect(getAllByRole('alert').length).to.be.equal(1);
        expect(getByRole('alert').textContent).to.be.equal('You must specify a password');
    })

    it('render error on submite form with email and password less then 8 characters', async () => {
        const { getByTestId, getByLabelText, getAllByRole, getByRole } = render(<SignInForm  />)
        const input = getByLabelText('Email');
        const pass = getByLabelText('Create password');
        await act(async () => {
            await fireEvent.change(input, { target: { value: 'user@user.com' } })
            await fireEvent.change(pass, { target: { value: '111' } })
          })
        await act(async () => {
            fireEvent.submit(getByTestId('submit'))
        })
        expect(getAllByRole('alert').length).to.be.equal(1);
        expect(getByRole('alert').textContent).to.be.equal('Password must have at least 8 characters');
    })

    it('render error on submite form with email and different passwords', async () => {
        const { getByTestId, getByLabelText, getAllByRole, getByRole } = render(<SignInForm  />)
        const input = getByLabelText('Email');
        const pass = getByLabelText('Create password');
        const pass2 = getByLabelText('Repeat password');
        await act(async () => {
            await fireEvent.change(input, { target: { value: 'user@user.com' } })
            await fireEvent.change(pass, { target: { value: '11111111' } })
            await fireEvent.change(pass2, { target: { value: '111' } })
          })
        await act(async () => {
            fireEvent.submit(getByTestId('submit'))
        })
        expect(getAllByRole('alert').length).to.be.equal(1);
        expect(getByRole('alert').textContent).to.be.equal('The passwords do not match');
    })

})
