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
    addTodo: (todo: {name: string, description: string; assignedTo: string; id?: number}) => void,
    deleteTodo: (id: string) => void,
    toggleTodo: (todo: ToDo) => void,
    addComment: (parentTodo: string, user: string, comment: string) => void,
    addCollaborator: (collaborator: string, parentTodo: string) => void,
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
          let todos = snapshot.val() ?? {};
          todos = Object.values(todos);
          dispatch(actions.updateTodosFromFirebase(todos))
      })
  }

  const getUsers = () => {
      Database.ref('users/').on('value', (snapshot) => {
          const data = snapshot.val();
          let users: User[] = Object.values(data)
          dispatch(actions.usersLoaded(users))    
      })
  }

  function addTodo(todo: {name: string, description: string; assignedTo: string; id?: number}){
      let todoRef = Database.ref('todos/').push();
      // dispatch(actions.firebaseStartLoading())
      todoRef.set({
        ...todo,
        id: todoRef.key
      })
      .then((doc) => {
        // dispatch(actions.firebaseEndLoading())
      })
      .catch((error) => {
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

  function addComment(parentTodo: string, user: string, comment: string){
    let commentRef = Database.ref(`todos/${parentTodo}/comments/`).push();
    console.log('push')
    commentRef.set({
      id: commentRef.key,
      author: user,
      comment: comment,
      parentTodo: parentTodo
    }).then((doc) => {
      console.log('render')
    })
    .catch((error) => {
        // dispatch(actions.addComment(commentRef.key || parentTodo, user, comment, parentTodo))
        console.error(error);
    })
  }

  function addCollaborator(collaborator: string, parentTodo: string){
    let collaboratorRef = Database.ref(`todos/${parentTodo}/collaborators/`).push();
    collaboratorRef.set(collaborator).then((doc) => {
    })
    .catch((error) => {
        // dispatch(actions.addCollaborator(collaborator, parentTodo));
        console.error(error);
    })
  }

  const app = {
      app: Firebase,
      // database: Database,
      api: {
          getTodos,
          getUsers,
          addTodo,
          deleteTodo,
          toggleTodo,
          addComment,
          addCollaborator
      }
  }


    return (
        <FirebaseContext.Provider value={app}>
            {children}
        </FirebaseContext.Provider>
    )
}
