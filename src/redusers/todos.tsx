import ToDo from "../models/ToDo";
import ToDoActions from "../models/ToDoActions";
import todo from "./todo";


type State = ToDo [];

const initialState: State = [];



const todos = (state: State = initialState, action: ToDoActions) => {
    switch(action.type){
        case 'UPDATE_TODOS':
            return action.payload.map(t => todo(t, action));

        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
              ]

        case 'TOGGLE_TODO':
            return state.map(t => (t.id === action.payload.id)
            ? todo(t, action)
            : t
            )

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        
        case 'ADD_COMMENT':
            return state.map(t => {
                 if (t.id === action.payload.parentTodo){
                    console.log(todo(t, action))
                    return todo(t, action)
                 }
                 else return t
                    
            })

        case 'ADD_COLLABORATOR':
            return state.map(t => {
                    if (t.id === action.payload.parentTodo){
                        return todo(t, action)
                    }
                    else return t
            })
    
    default:
        return state;
    }
}

export {
    todos,
    initialState
} ;