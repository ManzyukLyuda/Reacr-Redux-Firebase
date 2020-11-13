import React from "react";
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from "react-redux";
import { addCollaborator } from "../../actions";
import User from "../../models/User";
import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Dropdown.css'


interface Props {
    parentTodo: number
    users: User[]
}

export default (props: Props)=>{
    const {users, parentTodo} = props;
    const options = Array.from(users, user => user?.email);
    const isEmpty = !(options.length > 0);
    const dispatch = useDispatch();
    const dropdownOnChange = (data: any)=> {
        dispatch(addCollaborator(data, parentTodo));

    }

    return   <Dropdown onSelect={dropdownOnChange}>
               {!isEmpty && 
                    <Dropdown.Toggle bsPrefix="btn-circle">
                        +
                    </Dropdown.Toggle>
                }
                <Dropdown.Menu>
                    {options.map(option => {
                        return  <Dropdown.Item  key={`#${option}`} eventKey={option}>{option}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
}