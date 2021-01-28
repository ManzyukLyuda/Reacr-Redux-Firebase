import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import SignInForm from '../SignInForm/SignInFrom';
import SignUpFrom from '../SignUpForm/SignUpForm';
import Tabs from '../Tabs/Tabs';

const AuthForm: React.FC = () => {
	//AuthForm

	let { path } = useRouteMatch();

	return (
		<div className='from-wrap'>
			<Tabs />
			<Switch>
				<Route exact path={`${path}/signup`}>
					<SignUpFrom />
				</Route>
				<Route path={`${path}/signin`}>
					<SignInForm />
				</Route>
				<Route path={path}>
					<Redirect to={`${path}/signin`} />
				</Route>
			</Switch>
		</div>
	);
};

export default AuthForm;
