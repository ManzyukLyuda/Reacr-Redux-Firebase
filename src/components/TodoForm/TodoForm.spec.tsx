
import * as React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import AddTodoForm from './TodoForm'
import { act, fireEvent, render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Middleware, Dispatch, AnyAction } from 'redux'
import TestStoreWrapper from "../../../test/StoreWrapper"
import { Provider } from 'react-redux';
import FirebaseProvider from '../../services/firebase-service';


interface todoInnerData{
        name: string,
        description: string,  
        assignedTo: string
}
const state = {
    getUsers: {
      users: [{
        email: 'user@user.com',
        uid: '0101'
    },
    {
        email: 'user2@user.com',
        uid: '0102'
    }]
    }
  }

describe('<AddTodoForm />', () => {
    it('render <AddTodoForm />', () => {
      const props = { onTodoAdd: (_data: todoInnerData) => null}
      const wrapper = shallow(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)
      expect(wrapper).to.be.ok
    })

    it('render one form', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)

        expect(wrapper.find('form').length).to.equal(1)
      })

    it('render one input', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)

        expect(wrapper.find('input').length).to.equal(1)
    })

    it('input should start empty', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)
            
        expect(wrapper.find('input').props().defaultValue).to.equal('')
    })

    it('render one textarea', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null}
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)

        expect(wrapper.find('textarea').length).to.equal(1)
    })

    it('textarea should start empty', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null }
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)

        expect(wrapper.find('textarea').props().defaultValue).to.equal('')
    })

    it('render one select', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null }
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)
        
        expect(wrapper.find('select').length).to.equal(1)
    })
    it('select should contain users list', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null }
        const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
        const mockStore = configureStore(middlewares)
        const store = mockStore(state)
        
        const wrapper = mount(
			<Provider store={mockStore(state)}>
				<FirebaseProvider>
					<AddTodoForm {...props} />
				</FirebaseProvider>
			</Provider>
		);
        
        const users:any = store.getState()
        expect(wrapper.find('select').find('option').length).to.equal(2)
        expect(wrapper.find('select').find('option').forEach( (option, index)=>{
            option.first().text() === users.getUsers.users[index].email;
        })
        )
    })

    it('selected option by default should be first user from list', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null }
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)

        expect(wrapper.render().find('select').val()).to.equal('user@user.com');
    })

    it('render one button', () => {
        const props = { onTodoAdd: (_data: todoInnerData) => null }
        const wrapper = mount(<TestStoreWrapper><AddTodoForm {...props} /></TestStoreWrapper>)

        expect(wrapper.find('button').length).to.equal(1)
    })

    it('render error on submite empty form', async () => {
		const props = { onTodoAdd: (_data: todoInnerData) => null };
		const { getByTestId, getAllByRole } = render(
			<TestStoreWrapper>
				<AddTodoForm {...props} />
			</TestStoreWrapper>
		);
		await act(async () => {
			fireEvent.submit(getByTestId('submit'));
		});

		expect(getAllByRole('alert').length).to.be.equal(1);
	});
});

