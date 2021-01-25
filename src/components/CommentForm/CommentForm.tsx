import * as React from 'react';
import { useForm } from "react-hook-form";
import User from '../../models/User';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions';

interface Props{
    todoId: string
    user: User,
}


const CommentForm: React.FC<Props>= (props: Props) => {
    const  { todoId, user } = props;
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' });
    const dispatch  = useDispatch();
    let nextCommnetId = 1;

    const handlerSubmitComment = (data: any) => {
        
        dispatch(addComment(user.email, data.comment, todoId, nextCommnetId++))
        reset();
    }

    return  <form   
                onSubmit={handleSubmit(handlerSubmitComment)} 
                className="comment-form" 
                data-testid="form"
                >

                <textarea 
                    name="comment" 
                    placeholder="Leave comment" 
                    ref={register({ required: true })} 
                    defaultValue='' 
                    data-testid="textarea"
                ></textarea>

                <button 
                    type='submit' 
                    disabled={!formState.isValid} 
                    className="btn" 
                    data-testid="comment"
                    >
                            Comment
                    </button>
          
            </form>
}

export default CommentForm;