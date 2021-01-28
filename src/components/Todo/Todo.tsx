import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { userLogOut } from '../../actions';
import { FirebaseContext, Firebase } from '../../services/firebase-service';
import ToDo from '../../models/ToDo';

const TodoPage: React.FC = () => {
	const { api } = useContext(FirebaseContext);
	const dispatch = useDispatch();

	const onSignOut = () => {
		Firebase.auth()
			.signOut()
			.then(function () {
				dispatch(userLogOut());
			});
	};

	const onDeleteItem = (id: string) => {
		api.deleteTodo(id);
	};

	const onToggleItem = (todo: ToDo) => {
		api.toggleTodo(todo);
	};
	const onTodoAdd = (data: {
		name: string;
		description: string;
		assignedTo: string;
	}) => {
		api.addTodo(data);
	};

	return (
		<main className='main'>
			<h1>
				TodoList{' '}
				<button className='link' onClick={onSignOut}>
					Sign Out
				</button>
			</h1>
			<TodoForm onTodoAdd={onTodoAdd} />
			<TodoList onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
		</main>
	);
};

export default TodoPage;
