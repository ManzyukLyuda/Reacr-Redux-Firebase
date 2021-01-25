import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { firebaseConfig } from "../config/config";
import React from 'react'
import { useDispatch } from 'react-redux';
import User from '../models/User';
import * as actions from '../actions';
import ToDo from "../models/ToDo";

interface IFirebaseContext {
  app: firebase.app.App,
  api: {
    getUsers: () => void,
    getTodos: () => void,
    addTodo: (todo: {name: string, description: string; assignedTo: string; id?: number}, todoId: number) => void,
    deleteTodo: (id: string) => void,
    toggleTodo: (todo: ToDo) => void
  }
}

const FirebaseContext = React.createContext({} as IFirebaseContext);
const Firebase = firebase.initializeApp(firebaseConfig);
const Database = firebase.database();

export { FirebaseContext, Firebase, Database }

export default ({children}: any) => {
    const dispatch = useDispatch();
    const getTodos = () =>  {
      Database.ref('todos/').on('value', (snapshot) => {
          const data = snapshot.val() ?? {};
          dispatch(actions.updateTodosFromFirebase(Object.values(data)))
      
      })
  }

  const getUsers = () => {
      Database.ref('users/').on('value', (snapshot) => {
          const data = snapshot.val();
          let users: User[] = Object.values(data)
          dispatch(actions.usersLoaded(users))    
      })
  }

  function addTodo(todo: {name: string, description: string; assignedTo: string; id?: number}, todoId: number){
      let todoRef = Database.ref('todos/').push();
      todoRef.set({
        ...todo,
        id: todoRef.key
      })
      .then((doc) => {
          // nothing to do here since you already have a 
          // connection pulling updates to Todos
      })
      .catch((error) => {
          // dispatch(todoActions.showError("Error adding Todo to database"));
          console.error(error);
      })
  }

  function deleteTodo(id: string){
    Database.ref('todos/').child(id).remove();
  }

  function toggleTodo(todo: ToDo){
    const updates = {['todos/' + todo.id ]:  {...todo, completed:!todo.completed}};
    Database.ref().update(updates);
  }

  const app = {
      app: Firebase,
      // database: Database,
      api: {
          getTodos,
          getUsers,
          addTodo,
          deleteTodo,
          toggleTodo
      }
  }


    return (
        <FirebaseContext.Provider value={app}>
            {children}
        </FirebaseContext.Provider>
    )
}
