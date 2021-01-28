import { ErrorData } from "./SignUpForm";
import ToDo from "./ToDo";
import User from "./User";

interface State {
    isLoading: {
        isLoading: boolean
    }
    logInUser: {
        email: string, 
        isLogedIn: boolean
    }
    getUsers: {
        users: User[]
    }
    todos: ToDo[]
    firebaseError: ErrorData
 }
export default State;