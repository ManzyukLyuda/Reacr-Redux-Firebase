import Comment from "../models/Comment";
import Collaborator from "../models/Collaborator";
import ToDo from "./ToDo";


interface AddTodoAction { type:'ADD_TODO', payload: ToDo}
interface ToggleTodoAction { type: 'TOGGLE_TODO', payload: { id: number } }
interface DeleteTodoAction { type: 'DELETE_TODO', payload: {id: number} }
interface AddCommnet { type: 'ADD_COMMENT', payload: Comment }
interface AddCollaborator { type: 'ADD_COLLABORATOR', payload: Collaborator }
interface InitAction{type: undefined, payload: {}}

type Action = ToggleTodoAction | AddTodoAction | DeleteTodoAction | AddCommnet | AddCollaborator | InitAction;

export default Action;