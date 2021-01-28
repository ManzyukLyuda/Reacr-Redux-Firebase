import State from "../models/State"


const getUsers = (state: State) => state.getUsers.users;
const getUser = (state: State) => state.logInUser;
const selectIsLogedIn = (state: State) => state.logInUser.isLogedIn;
const selectIsLoading = (state: State) => state.isLoading.isLoading;
const getTodos = (state: State) => state.todos;
const getError = (state: State) =>  state.firebaseError;

export {
    getUsers,
    getUser,
    selectIsLogedIn,
    selectIsLoading,
    getTodos,
    getError
}