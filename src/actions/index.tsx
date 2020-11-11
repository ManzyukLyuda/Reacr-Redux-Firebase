import User from '../models/User';
let nextTodoId = 0;
let nextCommnetId = 1;

const addTodo = (name: string, description: string, assignedTo: string) => {
    return {
        type: 'ADD_TODO',
        payload:{
            id: nextTodoId++,
            name,
            description,
            assignedTo
        }
    }
}

const addComment = (author: string, comment: string, parentTodo: number) => {
    return {
        type: 'ADD_COMMENT',
        payload: {
            id: +(parentTodo.toString() + (nextCommnetId++).toString()),
            author,
            comment,
            parentTodo
        }
    }
}

const addCollaborator = (collaborator: string, parentTodo: number) => {
    return {
        type: 'ADD_COLLABORATOR',
        payload: {
            collaborator,
            parentTodo
        }
    }
}

const userLogIn = (user: string) => {
    return {
        type: 'USER_LOG_IN',
        user,
    }
}
const userLogOut = () => {
    return {
        type: 'USER_LOG_OUT'
    }
}
const toggleTodo = (id: number) => {
    return{
        type: 'TOGGLE_TODO',
        payload:{
            id
        }
    }
}

const deleteTodo = (id: number) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            id
        }
        }
  }

  const usersLoaded = (users: User[]) => {
    return {
      type: 'USERS_LOADED',
      payload: users
    };
  };


export {
    addTodo,
    addComment,
    addCollaborator,
    userLogIn,
    toggleTodo,
    deleteTodo,
    usersLoaded,
    userLogOut
};