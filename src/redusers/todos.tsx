import ToDo from "../models/ToDo";

interface AddTodoAction { type:'ADD_TODO', payload: ToDo}
interface ToggleTodoAction { type: 'TOGGLE_TODO', payload: { id: number } }
interface DeleteTodoAction { type: 'DELETE_TODO', payload: {id: number} }
interface InitAction{type: undefined, payload: {}}

type Action = ToggleTodoAction | AddTodoAction | DeleteTodoAction | InitAction;

type State = ToDo [];

const initialState: State = [];

const todos = (state: State = initialState, action: Action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                  id: action.payload.id,
                  name: action.payload.name,
                  description: action.payload.description,
                  completed: false,
                  assignedTo: action.payload.assignedTo
                }
              ]
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.payload.id)
            ? {...todo, completed: !todo.completed}
            : todo
            )

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
    
    default:
        return state;
    }
}

export {
    todos,
    initialState
} ;