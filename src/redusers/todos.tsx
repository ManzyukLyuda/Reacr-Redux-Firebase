import ToDo from "../models/ToDo";
import Comment from "../models/Comment";
import Collaborator from "../models/Collaborator";


interface AddTodoAction { type:'ADD_TODO', payload: ToDo}
interface ToggleTodoAction { type: 'TOGGLE_TODO', payload: { id: number } }
interface DeleteTodoAction { type: 'DELETE_TODO', payload: {id: number} }
interface AddCommnet { type: 'ADD_COMMENT', payload: Comment }
interface AddCollaborator { type: 'ADD_COLLABORATOR', payload: Collaborator }
interface InitAction{type: undefined, payload: {}}

type Action = ToggleTodoAction | AddTodoAction | DeleteTodoAction | AddCommnet | AddCollaborator | InitAction;

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
                  assignedTo: action.payload.assignedTo,
                  comments: [],
                  collaborators: []
                }
              ]
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.payload.id)
            ? {...todo, completed: !todo.completed}
            : todo
            )

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        
        case 'ADD_COMMENT':
            return state.map(todo => {
                 if (todo.id === action.payload.parentTodo){
                    return {
                        ...todo,
                        comments: [
                            ...todo.comments, 
                            action.payload
                        ]
                    }
                 }
                 else return{ ...todo }
                    
            })
        case 'ADD_COLLABORATOR':
            return state.map(todo => {
                    if (todo.id === action.payload.parentTodo){
                        return {
                            ...todo,
                            collaborators: [
                                ...todo.collaborators, 
                                action.payload
                            ]
                        }
                    }
                    else return{ ...todo }
            })
    
    default:
        return state;
    }
}

export {
    todos,
    initialState
} ;