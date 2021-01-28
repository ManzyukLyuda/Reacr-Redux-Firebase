import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import ToDo from '../../models/ToDo';
import TodoItem  from '../TodoItem/TodoItem'
import { FirebaseContext } from '../../services/firebase-service';
import { getTodos } from '../../selectors/';
import './TodoList.css';

interface Props {
    onDeleteItem: (id: string) => void
    onToggleItem: (todo: ToDo) => void
}

const TodoList: React.FC<Props> = (props: Props)=>{
	const { onDeleteItem, onToggleItem } = props;
	const { api } = useContext(FirebaseContext);
	const todos = useSelector(getTodos);

	useEffect(() => {
		api.getTodos();
	}, []);

	return (
		<ul className='todo-list'>
			{todos.map((todo: ToDo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				);
			})}
		</ul>
	);
}

export default React.memo(TodoList);
