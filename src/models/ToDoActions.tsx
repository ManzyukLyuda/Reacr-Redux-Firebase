import Comment from "../models/Comment";
import Collaborator from "../models/Collaborator";
import ToDo from "./ToDo";



interface UpdateTodos {type: 'UPDATE_TODOS', payload: ToDo[]}
interface AddTodoAction { type:'ADD_TODO', payload: ToDo}
interface ToggleTodoAction { type: 'TOGGLE_TODO', payload: { id: string } }
interface DeleteTodoAction { type: 'DELETE_TODO', payload: {id: string} }
interface AddCommnet { type: 'ADD_COMMENT', payload: Comment }
interface AddCollaborator { type: 'ADD_COLLABORATOR', payload: {collaborator: Collaborator, parentTodo: string} }
interface InitAction{type: undefined, payload: {}}

type Action = UpdateTodos | ToggleTodoAction | AddTodoAction | DeleteTodoAction | AddCommnet | AddCollaborator | InitAction;

export default Action;