import * as React from 'react'
import ToDo from '../../models/ToDo'
import Comment from '../../models/Comment'
import CommentForm from '../CommentForm/CommentForm'
import User from '../../models/User'
import './CommentList.css'
import { useSelector } from 'react-redux'


type Props = {
    todo: ToDo,
}

const CommentList = (props: Props) => {
    const {todo} = props;
    const user = useSelector( (state: any) => state.setUser);

    return  <div className='comment-thread'>
            <h6 className='comment-thread_title'>Comments</h6>
            {!todo.completed && <CommentForm todoId={todo.id} user={user}/>}
            <ul>
                {
                    todo.comments.map((comment: Comment) =>{
                        return  <li key={`comment-${comment.id}`} className='comment-item'>
                                    <p className="comment-author">From: {comment.author}</p>
                                    <p className="comment-text">{comment.comment}</p>
                                </li>
                    })
                }
            </ul>
            </div>
   
}

export default React.memo(CommentList);