import React from "react";
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from "react-redux";
import { addCollaborator } from "../../actions";
// import User from "../../models/User";
import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'
import { SelectCallback } from "react-bootstrap/esm/helpers";


interface Props {
    users: string[],
    onSelect: SelectCallback;
}

export default (props: Props)=>{
    const {users, onSelect} = props;

    return   <Dropdown onSelect={onSelect}>
                <Dropdown.Toggle bsPrefix="btn-circle"> + </Dropdown.Toggle>
                <Dropdown.Menu>
                    {users.map( (option:string) => {
                        return  <Dropdown.Item  key={`#${option}`} eventKey={option}>{option}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
}