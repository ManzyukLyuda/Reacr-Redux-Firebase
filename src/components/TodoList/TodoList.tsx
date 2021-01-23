import React from "react";
import { useSelector } from "react-redux";
import ToDo from "../../models/ToDo";
import "./TodoList.css";
import TodoItem  from '../TodoItem/TodoItem'

interface Props {
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
}

const TodoList: React.FC<Props> = (props: Props)=>{
    const { onDeleteItem, onToggleItem } = props;
    const todos = useSelector((state: any) =>  state.todos);
    
   
    return(
        <ul className="todo-list">
            {
                todos.map( (todo: ToDo) => { return(
                    <TodoItem key={todo.id} todo={todo} onDeleteItem={ onDeleteItem } onToggleItem={onToggleItem}/>
                    )  
                })
            }
        </ul>
    )
}

export default React.memo(TodoList);
