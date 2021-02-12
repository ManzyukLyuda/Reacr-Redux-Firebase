import * as React from 'react'
import { shallow } from 'enzyme'
import TodoItem from './TodoItem'



describe( '<TodoItem>', ()=>{
    it('render correct name of todo', () => {
        const props = {
			todo: {
				id: 'tets',
				description: 'Test',
				completed: false,
				assignedTo: 'test@test.com',
				name: 'todo',
				comments: [],
				collaborators: [],
			},
			onDeleteItem: () => null,
			onToggleItem: () => null,
		};
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('h5').first().text()).toBe('todo')
    })

    it('render correct description of todo', () => {
        const props = {
			todo: {
				id: 'test',
				description: 'first todo',
				completed: false,
				assignedTo: 'test@test.com',
				name: 'test',
				comments: [],
				collaborators: [],
			},
			onDeleteItem: () => null,
			onToggleItem: () => null,
		};
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('.todo-item_description').first().text()).toBe('first todo')
    })

    it('render correct username of assigned user', () => {
        const props = {
			todo: {
				id: 'tets',
				description: 'first todo',
				completed: false,
				assignedTo: 'test@test.com',
				name: 'test',
				comments: [],
				collaborators: [],
			},
			onDeleteItem: () => null,
			onToggleItem: () => null,
		};
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('.todo-item_assigned').first().text()).toBe('Assigned to test@test.com')
    })

    it('render Done button for new taskes', () => {
        const props = {
			todo: {
				id: 'tets',
				description: 'first todo',
				completed: false,
				assignedTo: 'test@test.com',
				name: 'test',
				comments: [],
				collaborators: [],
			},
			onDeleteItem: () => null,
			onToggleItem: () => null,
		};
        const wrapper = shallow(<TodoItem {...props} />)
        expect(wrapper.find('button').first().text()).toBe('Done')
    })

    it('render Delete button for completed taskes', () => {
		const props = {
			todo: {
				id: 'tets',
				description: 'first todo',
				completed: true,
				assignedTo: 'test@test.com',
				name: 'test',
				comments: [],
				collaborators: [],
			},
			onDeleteItem: () => null,
			onToggleItem: () => null,
		};
		const wrapper = shallow(<TodoItem {...props} />);
		expect(wrapper.find('button').first().text()).toBe('Delete');
	});
})