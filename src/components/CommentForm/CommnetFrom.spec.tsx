import { mount, shallow } from 'enzyme';
import React from 'react';
import CommentForm from './CommentForm';
import { expect } from 'chai';
import TestStoreWrapper from "../../../test/StoreWrapper"



describe('<CommentForm />', () => {
    it('render CommentForm', () => {
        const props = {
            todoId: 0, 
            user: {
                email: 'test@user.com',
                uid: 'test'
            }
        }
        const wrapper = shallow( <TestStoreWrapper><CommentForm {... props} /> </TestStoreWrapper>);
       
        expect(wrapper.find(CommentForm)).to.be.ok;
      })

      it('render one form', () => {
        const props = {
            todoId: 0, 
            user: {
                email: 'test@user.com',
                uid: 'test'
            }
        }
        const wrapper = mount(<TestStoreWrapper><CommentForm {... props} /> </TestStoreWrapper>)
        expect(wrapper.find('form').length).to.equal(1)
      })

      it('rrender one textarea', () => {
        const props = {
            todoId: 0, 
            user: {
                email: 'test@user.com',
                uid: 'test'
            }
        }
        const wrapper = mount(<TestStoreWrapper><CommentForm {... props} /> </TestStoreWrapper>)
        expect(wrapper.find('textarea').length).to.equal(1)
      })

      it('textarea should start empty', () => {
        const props = {
            todoId: 0, 
            user: {
                email: 'test@user.com',
                uid: 'test'
            }
        }
        const wrapper = mount(<TestStoreWrapper><CommentForm {... props} /> </TestStoreWrapper>)

        expect(wrapper.find('textarea').props().defaultValue).to.equal('')
        })

        it('render one button', () => {
            const props = {
                todoId: 0, 
                user: {
                    email: 'test@user.com',
                    uid: 'test'
                }
            }
            const wrapper = mount(<TestStoreWrapper><CommentForm {... props} /> </TestStoreWrapper>)
            
            expect(wrapper.find('button').length).to.equal(1)
        })

        it('enable button when the comment length is more than 3 characters', async () => {
            const props = {
                todoId: 0, 
                user: {
                    email: 'test@user.com',
                    uid: 'test'
                }
            }
        
            const wrapper = mount(<TestStoreWrapper> <CommentForm {... props} /> </TestStoreWrapper>)
            wrapper.find('textarea').simulate('change', {target: 'test'})

            expect(wrapper.find('button').props()).to.have.property('disabled', false);
        })

    })