import User from '../models/User';
let nextTodoId = 0;

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
    userLogIn,
    toggleTodo,
    deleteTodo,
    usersLoaded,
    userLogOut
};