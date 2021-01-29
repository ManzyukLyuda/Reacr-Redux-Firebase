import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import { firebaseConfig } from '../config/config';
import React from 'react';
import { useDispatch } from 'react-redux';
import User from '../models/User';
import * as actions from '../actions';
import ToDo from '../models/ToDo';
import { SignUpFormData } from '../models/SignUpForm';

interface IFirebaseContext {
	api: {
		signUpUser: (data: {
			email: string;
			password: string;
			passwordConfirmation: string;
		}) => Promise<any>;
		signInUser: (data: { email: string; password: string }) => Promise<any>;
		signOut: () => void;
		getUsers: () => void;
		getTodos: () => void;
		addTodo: (todo: {
			name: string;
			description: string;
			assignedTo: string;
			id?: number;
		}) => void;
		deleteTodo: (id: string) => void;
		toggleTodo: (todo: ToDo) => void;
		addComment: (parentTodo: string, user: string, comment: string) => void;
		addCollaborator: (collaborator: string, parentTodo: string) => void;
	};
}

const FirebaseContext = React.createContext({} as IFirebaseContext);
const Firebase = firebase.initializeApp(firebaseConfig);
const Database = firebase.database();
export { FirebaseContext, Firebase, Database };

type Props = {
	children: JSX.Element;
};

export default ({ children }: Props) => {
	const dispatch = useDispatch();
	const signUpUser = (data: SignUpFormData) => {
		dispatch(actions.firebaseStartLoading());
		dispatch(actions.firebaseClearError());
		return new Promise((resolve, reject) => {
			Firebase.auth()
				.createUserWithEmailAndPassword(data.email, data.password)
				.then(function (userCredential : firebase.auth.UserCredential) {
					if (userCredential.additionalUserInfo) {
						const user = {
							uid: userCredential.user!.uid,
							email: userCredential.user!.email,
						};
						let updates: any = {};
						updates['users/' + userCredential.user!.uid] = user;

						Database.ref().update(updates);
					}
					dispatch(actions.firebaseEndLoading());
					resolve({ success: true });
				})
				.catch(function (error) {
					dispatch(actions.firebaseGetError(error));
					dispatch(actions.firebaseEndLoading());
					reject(error);
				});
		});
	};
	const signInUser = (data: { email: string; password: string }) => {
		return new Promise((resolve, reject) => {
			Firebase.auth()
				.signInWithEmailAndPassword(data.email, data.password)
				.then(function (user) {
					dispatch(actions.userLogIn(user.user!.email!));
					dispatch(actions.firebaseEndLoading());
					resolve({ success: true });
				})
				.catch(function (error) {
					dispatch(actions.firebaseGetError(error));
					dispatch(actions.firebaseEndLoading());
					reject(error);
				});
		});
	};

	const signOut = () => {
		Firebase.auth()
			.signOut()
			.then(function () {
				dispatch(actions.userLogOut());
			});
	};

	const getTodos = () => {
		Database.ref('todos/').on('value', (snapshot) => {
			let todos = snapshot.val() ?? {};
			todos = Object.values(todos);
			dispatch(actions.updateTodosFromFirebase(todos));
		});
	};

	const getUsers = () => {
		Database.ref('users/').on('value', (snapshot) => {
			const data = snapshot.val();
			let users: User[] = Object.values(data);
			dispatch(actions.usersLoaded(users));
		});
	};

	const addTodo = (todo: {
		name: string;
		description: string;
		assignedTo: string;
		id?: number;
	}) => {
		let todoRef = Database.ref('todos/').push();
		todoRef
			.set({
				...todo,
				id: todoRef.key,
			})
			.then((doc) => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const deleteTodo = (id: string) => {
		Database.ref('todos/').child(id).remove();
	};

	const toggleTodo = (todo: ToDo) => {
		const updates = {
			['todos/' + todo.id]: { ...todo, completed: !todo.completed },
		};
		Database.ref().update(updates);
	};

	const addComment = (parentTodo: string, user: string, comment: string) => {
		let commentRef = Database.ref(`todos/${parentTodo}/comments/`).push();
		commentRef
			.set({
				id: commentRef.key,
				author: user,
				comment: comment,
				parentTodo: parentTodo,
			})
			.then((doc) => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const addCollaborator = (collaborator: string, parentTodo: string) => {
		let collaboratorRef = Database.ref(
			`todos/${parentTodo}/collaborators/`
		).push();
		collaboratorRef
			.set(collaborator)
			.then((doc) => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const app = {
		api: {
			signUpUser,
			signInUser,
			signOut,
			getTodos,
			getUsers,
			addTodo,
			deleteTodo,
			toggleTodo,
			addComment,
			addCollaborator,
		},
	};

	return (
		<FirebaseContext.Provider value={app}>
			{children}
		</FirebaseContext.Provider>
	);
};
