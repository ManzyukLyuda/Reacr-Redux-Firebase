import React from "react";
import ToDo from "../../models/ToDo";
import User from "../../models/User";
import CommentList from '../CommentList/CommentList'
import Dropdown from "../Dropdown/Dropdown";
import "./TodoList.css";

interface Props {
    todos: ToDo []
    onDeleteItem: (id: number) => void
    onToggleItem: (id: number) => void
    user: User,
    users: User[]
}



const TodoList: React.FC<Props> = (props: Props)=>{
    const {todos, onDeleteItem, onToggleItem, user, users} = props;
    
    const setUsers = (todo: ToDo)=>{
        let newUsers: User[] = [];
        let selected = todo.collaborators.map(collaborator => collaborator.collaborator);
        console.log(selected)
        users.map(user => {
            if(selected.length > 0){
                if( !selected.includes(user.email) ){
                    newUsers.push(user)
                }
            }
            else{
                newUsers.push(user)
            }
           
        })
       console.log(newUsers)
        return newUsers;
    }
    return(
        <ul className="todo-list">
            {
                todos.map(todo => { return(
                    <li key={todo.id} className={`todo-item ${todo.completed && "todo-item___done"}`}>
                        <h5>
                            {todo.name}
                            {todo.completed ? 
                                <button className="btn btn-red" onClick = {()=>{onDeleteItem(todo.id)}}>Delete</button> :
                                <button className="btn" onClick = {()=>{onToggleItem(todo.id)}}>Done</button>
                            }
                        </h5>
                        <p className="todo-item_description">{todo.description}</p>
                        <p className="todo-item_assigned">Assigned to {todo.assignedTo}</p>
                        <div className="todo-item_collaborators">
                            Collaborators: {todo.collaborators.map(collaborator => collaborator.collaborator + ', ')}
                            <Dropdown  users={setUsers(todo) as User[]} parentTodo = {todo.id}/>
                        </div>
                        <CommentList todo={todo} user={user}/>                        
                    </li>
                    )  
                })
            }
        </ul>
    )
}

export default TodoList;
