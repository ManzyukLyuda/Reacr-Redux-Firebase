import React from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoList from "../../components/TodoList/TodoList";
import { Firebase } from "../../services/firebase-service";
import { addTodo, deleteTodo, toggleTodo, userLogOut } from "../../actions"




let nextTodoId = 0;

const TodoPage: React.FC = () => {
    const dispatch = useDispatch();
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
        dispatch(addTodo(data.name, data.description, data.assignedTo, nextTodoId++))
    }


    return(
        <main className='main'>
            <h1>TodoList <button className="link" onClick = { onSignOut }>Sign Out</button></h1>
            <TodoForm  onTodoAdd={ onTodoAdd }/>
            <TodoList  onDeleteItem={ onDeleteItem } onToggleItem={onToggleItem} />
        </main>
    )
}


export default TodoPage;