import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FirebaseContext } from '../../services/firebase-service';
import { SignUpFormData } from '../../models/SignUpForm';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getError } from '../../selectors';

const SignUpForm: React.FC = () => {
	const { register, handleSubmit, watch, errors } = useForm<SignUpFormData>();
	const { api } = useContext(FirebaseContext);
	let history = useHistory();
	const userMessage = useSelector(getError);
	const passInputRef = useRef({});
	passInputRef.current = watch('password', '');

	const onSubmit = handleSubmit((data: SignUpFormData) => {
		api.signUpUser(data).then(() => {
			history.push('form/signin');
		});
	});
	const emailValidation = {
		refer: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
		message: 'Entered value does not match email format',
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='input-field'>
				<label htmlFor='email' className='control-label'>
					Email
				</label>
				<input
					defaultValue=''
					name='email'
					placeholder='email@mail.net'
					className='control-input'
					ref={register({
						required: 'You must specify an email',
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
				{userMessage?.code === 'auth/email-already-in-use' && (
					<p role='alert' className='error'>
						{userMessage.message}
					</p>
				)}
			</div>
			<div className='input-field'>
				<label htmlFor='password' className='control-label'>
					Create password
				</label>
				<input
					defaultValue=''
					name='password'
					ref={register({
						required: 'You must specify a password',
						minLength: {
							value: 8,
							message: 'Password must have at least 8 characters',
						},
					})}
					className='control-input'
				/>
				{errors.password && (
					<p role='alert' className='error'>
						{errors.password.message}
					</p>
				)}
			</div>
			<div className='input-field'>
				<label htmlFor='passwordConfirmation' className='control-label'>
					Repeat password
				</label>
				<input
					defaultValue=''
					name='passwordConfirmation'
					ref={register({
						validate: (value) =>
							value === passInputRef.current ||
							'The passwords do not match',
					})}
					className='control-input'
				/>
				{errors.passwordConfirmation && (
					<p role='alert' className='error'>
						{errors.passwordConfirmation.message}
					</p>
				)}
			</div>
			{userMessage?.code !== 'auth/email-already-in-use' && userMessage && (
				<p role='alert' className='error'>
					{userMessage.message}
				</p>
			)}
			<button data-testid='submit' className='btn'>
				Create accaunt
			</button>
		</form>
	);
};

export default SignUpForm;
