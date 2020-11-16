import * as React from 'react';
import { useForm } from "react-hook-form";
import User from '../../models/User';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions';

interface Props{
    todoId: number
    user: User,
}


const CommentForm: React.FC<Props>= (props: Props) => {
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' });
    const dispatch  = useDispatch();

    const handlerSubmitComment = (data: any) => {
        const  { todoId, user } = props

        dispatch(addComment(user.email, data.comment, todoId))
        reset();
    }

    return  <form onSubmit={handleSubmit(handlerSubmitComment)} className="comment-form" data-testid="form">
                <textarea name="comment" placeholder="Leave comment" ref={register({ required: true })} defaultValue='' data-testid="textarea"></textarea>
                <button type='submit' disabled={!formState.isValid} className="btn" data-testid="comment">Comment</button>
            </form>
}

export default CommentForm;