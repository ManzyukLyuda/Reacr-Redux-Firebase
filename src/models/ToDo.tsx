import Collaborator from "./Collaborator";
import Comment from "./Comment"

type ToDo = {
	id: string;
	name: string;
	description: string;
	completed: Boolean;
	assignedTo: string;
	comments?: Comment[];
	collaborators?: Collaborator[];
};
export default ToDo;