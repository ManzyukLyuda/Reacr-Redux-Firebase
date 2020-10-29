import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import { Firebase } from "../../services/firebase-service";
import {SignInFormData, ErrorData} from "../../models/SignInForm";
import { useHistory } from "react-router-dom";



const SignInForm: React.FC =() => {
    const { register,  handleSubmit, watch, errors} = useForm<SignInFormData>();
    const [userMaessage, setErroMessages] = useState<ErrorData>();
    let history = useHistory();
    
    const passInputRef = useRef({});
    passInputRef.current = watch("password1", "");

    
    
    
    const onSubmit = handleSubmit((data: SignInFormData) => {
      Firebase.auth().createUserWithEmailAndPassword(data.email, data.password1)
      .catch(function(error) { 
        setErroMessages({code: error.code, message: error.message}); 
      })
      .then(function(){
        history.push("/form/signup");
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
                  placeholder="email@mail.net" 
                  className="control-input"
                  ref={register({
                    required: "You must specify an email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Entered value does not match email format"
                    }
                  })}  
                  
                  />
                {errors.email && <p role="alert" className="error">{errors.email.message}</p>}
                {userMaessage?.code === "auth/email-already-in-use" && <p>{userMaessage.message}</p>}
            </div>
            <div className="input-field">
                <label htmlFor="password1" className="control-label">Create password</label>
                <input 
                        id='password1'
                        defaultValue=''
                        name='password1'
                        ref={register({
                          required: "You must specify a password",
                          minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                          }
                        })}
                className="control-input"/>
                {errors.password1 && <p role="alert" className="error">{errors.password1.message}</p>}
            </div>
            <div className="input-field">
                <label htmlFor="password2" className="control-label">Repeat password</label>
                <input  
                        id='password2'
                        defaultValue=''
                        name='password2'
                        ref={register({
                          validate: value =>
                            value === passInputRef.current || "The passwords do not match"
                        })}
                        
                        className="control-input"/>
               {errors.password2 && <p role="alert" className="error">{errors.password2.message}</p>}
            </div>
            {userMaessage?.code !== "auth/email-already-in-use" && userMaessage && <p>{userMaessage.message}</p>}
            <button data-testid="submit" type='submit' className="btn">Create accaunt</button>
        </form>
    );
  }
  
  export default SignInForm;
  

