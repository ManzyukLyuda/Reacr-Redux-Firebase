
import * as React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AddTodoForm from './TodoForm';
import { act, fireEvent, render } from '@testing-library/react';

const users = [{
    email: 'user@user.com',
    uid: '0101'
    },
    {
        email: 'user2@user.com',
        uid: '0102'
    }]

interface todoInnerData{
        name: string,
        description: string,  
        assignedTo: string
}


describe('<AddTodoForm />', () => {
    it('render <AddTodoForm />', () => {
      const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
      const wrapper = shallow(<AddTodoForm {...props} />)
      expect(wrapper).to.be.ok
    })

    it('render one form', () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)
        expect(wrapper.find('form').length).to.equal(1)
      })

    it('render one input', () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)

        expect(wrapper.find('input').length).to.equal(1)
    })

    it('input should start empty', () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}

        const wrapper = shallow(<AddTodoForm {...props} />)
        expect(wrapper.find('input').props().defaultValue).to.equal('')
    })

    it('render one textarea', () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)

        expect(wrapper.find('textarea').length).to.equal(1)
    })

    it('textarea should start empty', () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)

        expect(wrapper.find('textarea').props().defaultValue).to.equal('')
    })

    it('render one select', () => {
        const props = { users: users,  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)
        
        expect(wrapper.find('select').length).to.equal(1)
    })
    it('select should contain users list', () => {
        const props = { users: users,  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)
        
        expect(wrapper.find('select').find('option').length).to.equal(2)
        expect(wrapper.find('select').find('option').forEach( (option, index)=>{
            option.first().text() === users[index].email;
        })
        )
    })

    it('selected option by default should be first user from list', () => {
        const props = { users: users,  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)

        expect(wrapper.render().find('select').val()).to.equal('user@user.com');
    })

    it('render one button', () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = shallow(<AddTodoForm {...props} />)

        expect(wrapper.find('button').length).to.equal(1)
    })

    it('render error on submite empty form', async () => {
        const props = { users: [],  onTodoAdd: (_data: todoInnerData) => null}
        const { getByTestId, getAllByRole } = render(<AddTodoForm {...props} />)
        await act(async () => {
            fireEvent.submit(getByTestId('submit'))
        })

        expect(getAllByRole('alert').length).to.be.equal(1);
    })
    it('call submite on submite form with title', async () => {
        const props = { users: [],  onTodoAdd: jest.fn()}
        const { getByTestId, getByLabelText } = render(<AddTodoForm {...props} />)
        const input = getByLabelText('Title');
        await act(async () => {
            fireEvent.change(input, { target: { value: 'title' } })
        })
        await act(async () => {
            fireEvent.submit(getByTestId('submit'))
        })

        expect(props.onTodoAdd.mock.calls.length).to.be.equal(1);
        expect(props.onTodoAdd.mock.calls[0][0].name).to.be.equal('title');
    })
});

