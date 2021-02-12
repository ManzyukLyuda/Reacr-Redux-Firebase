import { mount, shallow } from 'enzyme';
import React from 'react';
import CommentList from './CommentList';
import TestStoreWrapper from "../../../test/StoreWrapper"
import CommentForm from '../CommentForm/CommentForm';



describe('<CommentList />', () => {
    it('render CommentList', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@test.com',
				comments: [],
				collaborators: [],
			},
		};
        const wrapper = shallow( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper>);
       
        expect(wrapper.find(CommentList)).toBeTruthy();
    })

    it('render one ul', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@test.com',
				comments: [],
				collaborators: [],
			},
		};
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find('ul').length).toBe(1);
    })

    it('render no li, with no comments', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@test.com',
				comments: [],
				collaborators: [],
			},
		};
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find('li').length).toBe(0);
    })

    it('render one h6 title', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@test.com',
				comments: [],
				collaborators: [],
			},
		};
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find('h6').length).toBe(1);
        expect(wrapper.find('h6').text()).toBe('Comments');
    })

    it('render one li, for one comment', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@test.com',
				comments: [
					{
						id: 'tetsComment',
						author: 'test@user.com',
						comment: 'test',
						parentTodo: 'tets',
					},
				],
				collaborators: [],
			},
		};
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find('li').length).toBe(1);
    })

    it('render CommentForm for not completed task', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: false,
				assignedTo: 'user@test.com',
				comments: [],
				collaborators: [],
			},
		};
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find(CommentForm).length).toBe(1);
    })

    it('render no CommentForm for completed task', () => {
        const props = {
			todo: {
				id: 'tets',
				name: 'test',
				description: 'test',
				completed: true,
				assignedTo: 'user@test.com',
				comments: [],
				collaborators: [],
			},
		};
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find(CommentForm).length).toBe(0);
    })

    it('each li should contain comment and author', () => {
        const props = {
            todo: {
                id: 'tets', 
                name: 'test',
                description: 'test',
                completed: true,
                assignedTo: 'user@test.com',
                comments: [
                    {
                        id: 'testComment',
                        author: 'test@user.com',
                        comment: 'test',
                        parentTodo: 'tets'
                    }
                ],
                collaborators: []
            },
            user: {
                email: 'test@user.com',
                uid: 'test'
            }
        }
        const wrapper = mount( <TestStoreWrapper><CommentList {... props} /> </TestStoreWrapper> );
       
        expect(wrapper.find('.comment-author').text()).toBe('From: test@user.com');
        expect(wrapper.find('.comment-text').text()).toBe('test');
    })
})