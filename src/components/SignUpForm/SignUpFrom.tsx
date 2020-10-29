import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { Firebase } from "../../services/firebase-service";
import { useHistory } from 'react-router-dom';
import { userLogIn } from '../../actions';
import { useDispatch } from 'react-redux';
import { FormData, errorData } from '../../models/SignUpForm';

const SignUpForm: React.FC = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const onSignUpHendler = (email: string)=>{
      dispatch(userLogIn(email));
      history.push("/");
  }

    const [userMaessage, setErroMessages] = useState<errorData>();
    
    const { register, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = handleSubmit((data: FormData) => {
      Firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function(user){
          onSignUpHendler(user.user!.email!);
        })
        .catch(function(error) {
          setErroMessages({code: error.code, message: error.message});
      })

    });
  
    return (
      <form onSubmit={onSubmit}>
        <div className="input-field">
            <label htmlFor="email" className="control-label">Email</label>
            <input 
              defaultValue=''
              id='email'
              name="email" 
              ref={register({
                    required: "required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Entered value does not match email format"
                  }
                   })} 
              />
            {errors.email && <p role="alert" className="error">{errors.email.message}</p>}
            {userMaessage?.code === "auth/user-not-found" && <p>{userMaessage.message}</p>}
        </div>
        <div className="input-field">
            <label htmlFor="password" className="control-label" >Password</label>
            <input 
              defaultValue=''
              id='password'
              name="password" 
              ref={register({required: "Password is required"})} 
            />
            {errors.password && <p role="alert" className="error">{errors.password.message}</p>}
            {userMaessage?.code === "auth/wrong-password" && <p>{userMaessage.message}</p>}
        </div>
        
        <button data-testid="submit" type="submit" className="btn">Sign Up</button>
      </form>
    );
  }

  export default SignUpForm;