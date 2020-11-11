import React from "react";
import { Dispatch } from 'redux';
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoList from "../../components/TodoList/TodoList";
import User from "../../models/User";
import Todo from "../../models/ToDo";
import { Firebase } from "../../services/firebase-service";
import { addTodo, deleteTodo, toggleTodo, userLogOut } from "../../actions"


interface Props{
    user: User;
    todos: Todo[];
    users: User[];
    dispatch : Dispatch;
}

const TodoPage: React.FC<Props> = (props: Props) => {
    const { todos, users, dispatch, user } = props;

    const onSignOut = ()=>{
        Firebase.auth().signOut().then(function() {
            dispatch(userLogOut());
        })
    }

    const onDeleteItem = (id: number)=>{
        dispatch(deleteTodo(id));
    }

    const onToggleItem = (id: number)=>{
        dispatch(toggleTodo(id))
    }
    const onTodoAdd = (data: {
        name: string,
        description: string,  
        assignedTo: string
    })=>{
        dispatch(addTodo(data.name, data.description, data.assignedTo))
    }

    return(
        <main className='main'>
            <h1>TodoList <button className="link" onClick = { onSignOut }>Sign Out</button></h1>
            <TodoForm  users = {users} onTodoAdd={ onTodoAdd }/>
            <TodoList  todos={todos} onDeleteItem={ onDeleteItem } onToggleItem={onToggleItem} user={user} users = {users}/>
        </main>
    )
}


export default TodoPage;