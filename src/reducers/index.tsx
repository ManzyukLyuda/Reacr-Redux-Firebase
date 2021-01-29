import { combineReducers, Reducer } from 'redux';
import { todos } from './todos';
import { logInUser } from './logIn';
import { getUsers } from './users';
import { isLoading } from './loading';
import { firebaseError } from './error';


const rootReducer: Reducer = combineReducers({
	todos,
	logInUser,
	getUsers,
	isLoading,
	firebaseError,
});

export default rootReducer;
