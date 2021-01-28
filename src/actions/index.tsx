import { ErrorData } from '../models/SignUpForm';
import ToDo from '../models/ToDo';
import User from '../models/User';
import actionTypes from '../reducers/actionTypes';

const updateTodosFromFirebase = (todos: ToDo[]) => {
    return{
        type: actionTypes.todos.UPDATE_TODOS,
        payload: todos
    }
}

const firebaseStartLoading = ()=>{
    return{
        type: actionTypes.loading.FIREBASE_START_LOADING,
        payload: true
    }
}

const firebaseEndLoading = ()=>{
    return{
        type: actionTypes.loading.FIREBASE_END_LOADING,
        payload: false
    }
}
const firebaseGetError = (error: ErrorData)=>{
    return{
        type: actionTypes.error.FIREBASE_GET_ERROR,
        payload: {
            code: error.code,
            message: error.message
        }
    }
}
const firebaseClearError = ()=>{
    return{
        type: actionTypes.error.FIREBASE_CLEAR_ERROR
    }
}


const userLogIn = (user: string) => {
    return {
        type: actionTypes.logIn.USER_LOG_IN,
        user,
    }
}
const userLogOut = () => {
    return {
        type: actionTypes.logIn.USER_LOG_OUT
    }
}


  const usersLoaded = (users: User[]) => {
    return {
      type: actionTypes.users.GET_USERS,
      payload: users
    };
  };


export {
    updateTodosFromFirebase,
    firebaseStartLoading,
    firebaseEndLoading,
    firebaseGetError,
    firebaseClearError,
    userLogIn,
    usersLoaded,
    userLogOut
};