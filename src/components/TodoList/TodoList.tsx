import React from "react";
import ToDo from "../../models/ToDo";
import "./TodoList.css";


interface Props {
    todos: ToDo [],
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
}

const TodoList: React.FC<Props> = (props: Props)=>{
    const {todos, onDeleteItem, onToggleItem} = props;

    return(
        <ul className="todo-list">
            {
                todos.map(todo => { return(
                    <li key={todo.id} className={`todo-item ${todo.completed && "todo-item___done"}`}>
                        <h5>{todo.name}</h5>
                        <p className="todo-item_description">{todo.description}</p>
                        <p className="todo-item_assigned">Assigned to {todo.assignedTo}</p>
                        {todo.completed ? 
                            <button className="btn btn-red" onClick = {()=>{onDeleteItem(todo.id)}}>Delete</button> :
                            <button className="btn" onClick = {()=>{onToggleItem(todo.id)}}>Done</button>
                        }
                    </li>
                    )  
                })
            }
        </ul>
    )
}

export default TodoList;
