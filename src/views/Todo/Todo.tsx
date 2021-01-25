import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoList from "../../components/TodoList/TodoList";
import { deleteTodo, toggleTodo, userLogOut} from "../../actions"
import User from "../../models/User";
import { FirebaseContext, Firebase } from '../../services/firebase-service';
import ToDo from "../../models/ToDo";




let nextTodoId = 0;

const TodoPage: React.FC = () => {
    const { app, api } = useContext(FirebaseContext);
    const dispatch = useDispatch();

    
    const onSignOut = ()=>{
        Firebase.auth().signOut().then(function() {
            dispatch(userLogOut());
        })
    }

    const onDeleteItem = (id: string)=>{
        // dispatch(deleteTodo(id));
        api.deleteTodo(id);
    }

    const onToggleItem = (todo: ToDo)=>{
        // dispatch(toggleTodo(id));
        api.toggleTodo(todo);
    }
    const onTodoAdd = (data: {
        name: string,
        description: string,  
        assignedTo: string
    })=>{
        api.addTodo(data, nextTodoId++)
        // var updates:any = {};
        // updates['todos/' + nextTodoId++] ={
        //     ...data,
        //     id: nextTodoId
        // };
        // Database.ref().update(updates);
        // console.log('AddToDo  страбатывает', updates);
        // dispatch(addTodo(data.name, data.description, data.assignedTo, nextTodoId++))

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