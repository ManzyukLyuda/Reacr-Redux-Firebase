import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TodosList from './TodoList';
import './TodoList.css'

const TODO = [
    {
        name: 'todo',
        description: 'first todo',
        assignedTo: 'user@user.com',
        id: 0,
        completed: false
      }
  ]
  
  const TODOS = [
    {
      name: 'todo',
      description: 'first todo',
      assignedTo: 'user@user.com',
      id: 0,
      completed: false
    },
    {
      name: 'todo',
      description: 'second todo',
      assignedTo: 'user@user.com',
      id: 1,
      completed: false
    },
    {
      name: 'todo',
      description: 'third todo',
      assignedTo: 'user@user.com',
      id: 2,
      completed: false
    },
    {
        name: 'todo',
        description: 'fourth todo',
        assignedTo: 'user@user.com',
        id: 3,
        completed: false
    },
  ]
  
  describe('<TodosList />', () => {
    it('render TodosList', () => {
        const props = { 
            todos: [], 
            onDeleteItem: () => null,
            onToggleItem: () => null
         }
        const wrapper = shallow(<TodosList {...props} />);
        expect(wrapper).to.be.ok
      })

    it('render one <ul>', ()=>{
        const props = { 
            todos: [], 
            onDeleteItem: () => null,
            onToggleItem: () => null
         }
        const wrapper = shallow( <TodosList {...props} /> );
        expect(wrapper.find('ul').length).to.equal(1)
    })

    it('render empty list', () => {
        const props = { 
            todos: [], 
            onDeleteItem: () => null,
            onToggleItem: () => null
         }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('li').length).to.equal(0)
      })

    it('render one todo', () => {
        const props = { 
            todos: TODO, 
            onDeleteItem: () => null,
            onToggleItem: () => null
         }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('li').length).to.equal(1)
      })

    it('render correct name of todo', () => {
        const props = { 
            todos: TODO, 
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('h5').first().text()).to.equal('todo')
    })

    it('render correct description of todo', () => {
        const props = { 
            todos: TODO, 
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('.todo-item_description').first().text()).to.equal('first todo')
    })

    it('render correct username of assigned user', () => {
        const props = { 
            todos: TODO, 
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('.todo-item_assigned').first().text()).to.equal('Assigned to user@user.com')
    })

    it('render Done button for new taskes', () => {
        const props = { 
            todos: TODO, 
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('button').first().text()).to.equal('Done')
    })

    it('render Delete button for completed taskes', () => {
        const props = { 
            todos: [{
                name: 'todo',
                description: 'first todo',
                assignedTo: 'user@user.com',
                id: 0,
                completed: true
            }], 
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('button').first().text()).to.equal('Delete')
    })

    it('render more than one todo', () => {
        const props = { 
            todos: TODOS, 
            onDeleteItem: () => null,
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
        expect(wrapper.find('li').length).to.be.greaterThan(1)
      })

    it('call onToggleItem once', () => {
            const props = { 
                todos: TODO, 
                onDeleteItem: () => null,
                onToggleItem: jest.fn()
            }
        const wrapper = shallow(<TodosList {...props} />)

        wrapper.find('li').find('button').simulate('click')
        expect(props.onToggleItem.mock.calls.length).to.be.equal(1)
    });

    it('call onToggleItem with correct id ', () => {
        const props = { 
            todos: TODO, 
            onDeleteItem: () => null,
            onToggleItem: jest.fn()
        }
        const wrapper = shallow(<TodosList {...props} />)
    
        wrapper.find('li').find('button').simulate('click')
        expect(props.onToggleItem.mock.calls[0][0]).to.be.equal(0)
      });

    it('call onDeleteItem once', () => {
        const props = { 
            todos: [{
                name: 'todo',
                description: 'first todo',
                assignedTo: 'user@user.com',
                id: 0,
                completed: true
            }], 
            onDeleteItem: jest.fn(),
            onToggleItem: () => null
        }

    const wrapper = shallow(<TodosList {...props} />)

    wrapper.find('li').find('button').simulate('click')
    expect(props.onDeleteItem.mock.calls.length).to.be.equal(1)
    })

    it('call onDeleteItem with correct id ', () => {
        const props = { 
            todos: [{
                name: 'todo',
                description: 'first todo',
                assignedTo: 'user@user.com',
                id: 0,
                completed: true
            }], 
            onDeleteItem: jest.fn(),
            onToggleItem: () => null
        }
        const wrapper = shallow(<TodosList {...props} />)
    
        wrapper.find('li').find('button').at(0).simulate('click')
        expect(props.onDeleteItem.mock.calls[0][0]).to.be.equal(0)

      })
  })