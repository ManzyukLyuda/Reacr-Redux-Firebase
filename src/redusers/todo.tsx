import ToDo from "../models/ToDo";
import ToDoActions from "../models/ToDoActions"



const todo = (state: ToDo | undefined, action: ToDoActions) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                completed: false,
                assignedTo: action.payload.assignedTo,
                comments: [],
                collaborators: []
              }
              
        case 'TOGGLE_TODO':
            return {...state, completed: !state!.completed}


        case 'ADD_COMMENT': 
            return {
                ...state,
                comments: [
                    ...state!.comments, 
                    action.payload
                ]
            }
        case 'ADD_COLLABORATOR':
            return {
                ...state,
                collaborators: [
                    ...state!.collaborators, 
                    action.payload.collaborator
                ]
            }

    default:
        return state;
    } 
        
}

export default todo;    

