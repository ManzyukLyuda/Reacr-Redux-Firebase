import * as React from 'react'
import { Provider } from 'react-redux'
import store from '../src/store'
import configureStore from 'redux-mock-store'
import { Middleware, Dispatch, AnyAction } from 'redux'


interface Props {
  children: any,
}


const state = {
  setUser: {
    isLogedIn: true
  },
  getUsers: {
    users: [{
      email: 'user@user.com',
      uid: '0101'
  },
  {
      email: 'user2@user.com',
      uid: '0102'
  }]
  },
  todos: [
      {
          name: 'todo',
          description: 'first todo',
          assignedTo: 'user@user.com',
          id: 0,
          completed: false,
          collaborators: ['test', 'tets2'],
          comments: []
        }
  ]
}
  
const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
const mockStore = configureStore(middlewares)

const TestStoreWrapper: React.SFC<Props> = (props) => {
  return <Provider store={mockStore(state)} >{props.children}</Provider>
}

export default TestStoreWrapper
