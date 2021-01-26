import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TodoItem from './TodoItem'



describe( '<TodoItem>', ()=>{
    it('render correct name of todo', () => {
        const props = { 
            todo: {
                id: 0,
                description: 'Test', 
                completed: false, 
                assignedTo: 'test@test.com',
                name: 'todo', 
                comments: [], 
                collaborators: []
            },
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('h5').first().text()).to.equal('todo')
    })

    it('render correct description of todo', () => {
        const props = { 
            todo: {
                id: 0,
                description: 'first todo', 
                completed: false, 
                assignedTo: 'test@test.com',
                name: 'test', 
                comments: [], 
                collaborators: []
            },
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('.todo-item_description').first().text()).to.equal('first todo')
    })

    it('render correct username of assigned user', () => {
        const props = { 
            todo: {
                id: 0,
                description: 'first todo', 
                completed: false, 
                assignedTo: 'test@test.com',
                name: 'test', 
                comments: [], 
                collaborators: []
            },
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('.todo-item_assigned').first().text()).to.equal('Assigned to test@test.com')
    })

    it('render Done button for new taskes', () => {
        const props = { 
            todo: {
                id: 0,
                description: 'first todo', 
                completed: false, 
                assignedTo: 'test@test.com',
                name: 'test', 
                comments: [], 
                collaborators: []
            },
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('button').first().text()).to.equal('Done')
    })

    it('render Delete button for completed taskes', () => {
        const props = { 
            todo: {
                id: 0,
                description: 'first todo', 
                completed: true, 
                assignedTo: 'test@test.com',
                name: 'test', 
                comments: [], 
                collaborators: []
            },
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('button').first().text()).to.equal('Delete')
    })

    // it('call onToggleItem once', () => {
    //         const props = { 
    //             todo: {
    //                 id: 0,
    //                 description: 'first todo', 
    //                 completed: true, 
    //                 assignedTo: 'test@test.com',
    //                 name: 'test', 
    //                 comments: [], 
    //                 collaborators: []
    //             },
    //             onDeleteItem: () => null,
    //             onToggleItem: jest.fn(),
    //         }
    //     const wrapper = shallow(<TodoItem {...props} />)
    //     wrapper.debug();
    //     wrapper.find('li').find('button').simulate('click')
    //     expect(props.onToggleItem.mock.calls.length).to.be.equal(1)
    // });

    // it('call onToggleItem with correct id ', () => {
    //     const props = { 
    //         todos: TODO, 
    //         onDeleteItem: () => null,
    //         onToggleItem: jest.fn(),
    //         user: {
    //             email: 'user@user.com',
    //             uid: '1'
    //         },
    //         users: []
    //     }
    //     const wrapper = shallow(<TodoItem {...props} />)
    
    //     wrapper.find('li').find('button').simulate('click')
    //     expect(props.onToggleItem.mock.calls[0][0]).to.be.equal(0)
    //   });

    // it('call onDeleteItem once', () => {
    //     const props = { 
    //         todos: [{
    //             name: 'todo',
    //             description: 'first todo',
    //             assignedTo: 'user@user.com',
    //             id: 0,
    //             completed: true,
    //             collaborators: [],
    //             comments: []
    //         }], 
    //         onDeleteItem: jest.fn(),
    //         onToggleItem: () => null,
    //         user: {
    //             email: 'user@user.com',
    //             uid: '1'
    //         },
    //         users: []
    //     }

    // const wrapper = shallow(<TodoItem {...props} />)

    // wrapper.find('li').find('button').simulate('click')
    // expect(props.onDeleteItem.mock.calls.length).to.be.equal(1)
    // })

    // it('call onDeleteItem with correct id ', () => {
    //     const props = { 
    //         todos: [{
    //             name: 'todo',
    //             description: 'first todo',
    //             assignedTo: 'user@user.com',
    //             id: 0,
    //             completed: true,
    //             collaborators: [],
    //             comments: []
    //         }], 
    //         onDeleteItem: jest.fn(),
    //         onToggleItem: () => null,
    //         user: {
    //             email: 'user@user.com',
    //             uid: '1'
    //         },
    //         users: []
    //     }
    //     const wrapper = shallow(<TodoItem {...props} />)
    
    //     wrapper.find('li').find('button').at(0).simulate('click')
    //     expect(props.onDeleteItem.mock.calls[0][0]).to.be.equal(0)

    //   })
})