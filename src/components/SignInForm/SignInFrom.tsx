import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { firebaseClearError } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormData } from '../../models/SignInForm';
import { firebaseStartLoading } from '../../actions';
import { getError } from '../../selectors';
import { FirebaseContext } from '../../services/firebase-service';
import { useHistory } from 'react-router-dom';

const SignInForm: React.FC = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	const { api } = useContext(FirebaseContext);
	const userMessage = useSelector(getError);
	const { register, handleSubmit, errors } = useForm<FormData>();

	const emailValidation = {
		refer: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
		message: 'Entered value does not match email format',
	};
	const passwordValidation = {
		message: 'Password is required',
	};

	const onSubmit = handleSubmit((data: FormData) => {
		dispatch(firebaseStartLoading());
		dispatch(firebaseClearError());
		
		api.signInUser(data).then(()=>{
			history.push('/')
		});
		
	});

	return (
		<form onSubmit={onSubmit}>
			<div className='input-field'>
				<label htmlFor='email' className='control-label'>
					Email
				</label>
				<input
					defaultValue=''
					name='email'
					ref={register({
						required: 'required',
						pattern: {
							value: emailValidation.refer,
							message: emailValidation.message,
						},
					})}
				/>
				{errors.email && (
					<p role='alert' className='error'>
						{errors.email.message}
					</p>
				)}
				{userMessage?.code === 'auth/user-not-found' && (
					<p role='alert' className='error'>
						{userMessage.message}
					</p>
				)}
			</div>
			<div className='input-field'>
				<label htmlFor='password' className='control-label'>
					Password
				</label>
				<input
					defaultValue=''
					name='password'
					ref={register({ required: passwordValidation.message })}
				/>
				{errors.password && (
					<p role='alert' className='error'>
						{errors.password.message}
					</p>
				)}
				{userMessage?.code === 'auth/wrong-password' && (
					<p role='alert' className='error'>
						{userMessage.message}
					</p>
				)}
			</div>

			<button data-testid='submit' type='submit' className='btn'>
				Sign In
			</button>
		</form>
	);
};;

export default SignInForm;
