import React from "react";
import { useSelector } from "react-redux";
import ToDo from "../../models/ToDo";
import User from "../../models/User";
import Dropdown from "../Dropdown/Dropdown";
import { useContext } from "react";
import { FirebaseContext } from "../../services/firebase-service";
import { getUsers } from '../../selectors/index';

interface Props {
    todo: ToDo
}


const CollaboratorsSelect: React.FC<Props> = (props: Props) => {
    const users = useSelector(getUsers);
    const { api } = useContext(FirebaseContext);
    const { todo } = props;
    let UsersToAdd = users
		.map((user: User) => user.email)
		.filter(
			(user: string) => !Object.values(todo.collaborators!).includes(user)
		); 
    
    
    const dropdownOnChange = (data: any)=> {
            api.addCollaborator(data, todo.id)
        }

    return(
        (UsersToAdd.length > 0) 
            ? <Dropdown  users= {UsersToAdd} onSelect={dropdownOnChange}/>
            : null
    )
}

export default CollaboratorsSelect;