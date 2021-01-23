import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../../models/ToDo";
import User from "../../models/User";
import { addCollaborator } from "../../actions";
import Dropdown from "../Dropdown/Dropdown";

interface Props {
    todo: ToDo
}


const CollaboratorsSelect: React.FC<Props> = (props: Props) => {
    const users = useSelector((state: any) =>  state.getUsers.users);
    const dispatch = useDispatch();
    const { todo } = props;

    let UsersToAdd = users.map( (user: User) => user.email)
                          .filter( (user:string) => !todo.collaborators.includes(user)); 
    
    
    const dropdownOnChange = (data: any)=> {
            dispatch(addCollaborator(data, todo.id));
        }

    return(
        (UsersToAdd.length > 0) 
            ? <Dropdown  users= {UsersToAdd} onSelect={dropdownOnChange}/>
            : null
    )
}

export default CollaboratorsSelect;