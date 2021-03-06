import React from "react";
import ToDo from "../../models/ToDo";
import CollaboratorsSelect from "../CollaboratorsSelect/CollaboratorsSelect";
import CommentList from "../CommentList/CommentList";

interface Props {
    todo: ToDo,
    onDeleteItem: (id: string) => void
    onToggleItem: (todo: ToDo) => void
}

const TodoList: React.FC<Props> = (props: Props)=>{
	const { todo, onDeleteItem, onToggleItem } = props;
	const collaborators = Object.values(todo.collaborators!);

	return (
		<li
			key={todo.id}
			className={`todo-item ${todo.completed && 'todo-item___done'}`}>
			<div className='todo-item_title'>
				<h5>{todo.name}</h5>
				{todo.completed ? (
					<button
						className='btn btn-red'
						onClick={() => {
							onDeleteItem(todo.id);
						}}>
						Delete
					</button>
				) : (
					<button
						className='btn'
						onClick={() => {
							onToggleItem(todo);
						}}>
						Done
					</button>
				)}
			</div>
			<p className='todo-item_description'>{todo.description}</p>
			<p className='todo-item_assigned'>
				<strong>Assigned to</strong> {todo.assignedTo}
			</p>
			<div className='todo-item_collaborators'>
				<strong>Collaborators:{' '}</strong>
				{collaborators.map((collaborator) => collaborator + ', ')}
				<CollaboratorsSelect todo={todo} />
			</div>
			<CommentList todo={todo} />
		</li>
	);
}


export default TodoList;