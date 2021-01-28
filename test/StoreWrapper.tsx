import * as React from 'react'
import { Provider } from 'react-redux'
import { FirebaseContext } from '../src/services/firebase-service';
import configureStore from 'redux-mock-store'
import { Middleware, Dispatch, AnyAction } from 'redux'


interface Props {
  children: any,
}


const state = {
	logInUser: {
		isLogedIn: true,
	},
	getUsers: {
		users: [
			{
				email: 'user@user.com',
				uid: '0101',
			},
			{
				email: 'user2@user.com',
				uid: '0102',
			},
		],
	},
	todos: [
		{
			name: 'todo',
			description: 'first todo',
			assignedTo: 'user@user.com',
			id: 0,
			completed: false,
			collaborators: ['test', 'tets2'],
			comments: [],
		},
	],
};

const app = {
	api: {
		signUpUser: () =>
			new Promise((resolve, reject) => (true ? resolve : reject)),
		signInUser: () =>
			new Promise((resolve, reject) => (true ? resolve : reject)),
		getTodos: () => {},
		getUsers: () => {},
		addTodo: () => {},
		deleteTodo: () => {},
		toggleTodo: () => {},
		addComment: () => {},
		addCollaborator: () => {},
	},
};
const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = []
const mockStore = configureStore(middlewares)

const TestStoreWrapper: React.SFC<Props> = (props) => {
  return (
		<Provider store={mockStore(state)}>
			<FirebaseContext.Provider value={app}>
				{props.children}
			</FirebaseContext.Provider>
		</Provider>
  );
}

export default TestStoreWrapper
