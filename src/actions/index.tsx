import ToDo from '../models/ToDo';
import User from '../models/User';

const updateTodosFromFirebase = (todos: ToDo[]) => {
    return{
        type: 'UPDATE_TODOS',
        payload: todos
    }
}

const addTodo = (name: string, description: string, assignedTo: string, id: string) => {
    return {
        type: 'ADD_TODO',
        payload:{
            id,
            name,
            description,
            assignedTo
        }
    }
}

const addComment = (author: string, comment: string, parentTodo: string, id: number) => {
    return {
        type: 'ADD_COMMENT',
        payload: {
            id,
            author,
            comment,
            parentTodo
        }
    }
}

const addCollaborator = (collaborator: string, parentTodo: string) => {
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
const toggleTodo = (id: string) => {
    return{
        type: 'TOGGLE_TODO',
        payload:{
            id
        }
    }
}

const deleteTodo = (id: string) => {
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
    updateTodosFromFirebase,
    addTodo,
    addComment,
    addCollaborator,
    userLogIn,
    toggleTodo,
    deleteTodo,
    usersLoaded,
    userLogOut
};