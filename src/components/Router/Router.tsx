import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import Todo from '../Todo/Todo';
import PrivateRoute from '../PrivateRout/PrivateRout';
import Spinner from '../Spinner/Spinner';
import { selectIsLogedIn } from '../../selectors';

const Router: React.FC = () => {
	const isLogedIn = useSelector(selectIsLogedIn);

	return (
		<Switch>
			<Route path='/form'>
				<Spinner>
					<AuthForm />
				</Spinner>
			</Route>
			<PrivateRoute path='/' isAuthorized={isLogedIn}>
				<Todo />
			</PrivateRoute>
		</Switch>
	);
};

export default Router;
