import React from "react";
import {useForm} from "react-hook-form";
import { useSelector } from "react-redux";
import ToDo from "../../models/ToDo";
import User from "../../models/User";
import "./TodoForm.css";


interface Props {
    onTodoAdd : (data: {
        name: string,
        description: string,  
        assignedTo: string
    }) => void,
}

const AddTodoForm:React.FC<Props> = (props: Props) => {
    const { onTodoAdd } = props;
    const users = useSelector((state: any) =>  state.getUsers.users);
    const { register,  handleSubmit, errors, reset} = useForm<ToDo>();
    
    const onSubmit = (data: { name: string, description: string,  assignedTo: string }) => {
        onTodoAdd(data); 
        reset();
      };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className='input-field'>
                <label htmlFor="name" className="control-label">Title</label>
                <input 
                    id="name"
                    role="name"
                    type="text" 
                    name="name"
                    defaultValue=""
                    ref={register
                        ({
                        required: "You must specify a task title",
                        minLength: {
                        value: 3,
                        message: "Task name must have at least 3 characters"
                        }
                    })
                }
                />
                {errors.name && <p role="alert" className="error">{errors.name.message}</p>}
            </div>
            <div className='input-field'>
                <label htmlFor="description" className="control-label">Description</label>
                <textarea 
                    role="description"
                    name="description"
                    defaultValue=""
                    ref={register}
                ></textarea>
            </div>
            <div className='input-field'>
                <label htmlFor="assignedTo" className="control-label">Assigned to</label>
                <select name="assignedTo" ref={register} role="assignedTo">
                    {
                        users.map( (user:User) => {
                        return <option key = {user.uid} value={user.email}>{user.email}</option>
                        })
                    }
                </select>
            </div>
            <button type="submit" data-testid="submit" className="btn">Add todo</button>
        </form>
        )

}

export default AddTodoForm;