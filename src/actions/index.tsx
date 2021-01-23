import User from '../models/User';

const addTodo = (name: string, description: string, assignedTo: string, id: number) => {
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

const addComment = (author: string, comment: string, parentTodo: number, id: number) => {
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