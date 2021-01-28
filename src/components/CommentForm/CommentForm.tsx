import * as React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { FirebaseContext } from '../../services/firebase-service';

interface Props{
    todoId: string
    user: { email: string },
}


const CommentForm: React.FC<Props>= (props: Props) => {
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' });
    const { api } = useContext(FirebaseContext);

    const handlerSubmitComment = (data: any) => {
        const  { todoId, user } = props;
        api.addComment(todoId, user.email, data.comment)
        
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