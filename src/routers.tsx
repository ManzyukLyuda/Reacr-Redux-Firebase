import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignIn';
import SignUpFrom from './components/SignUpForm/SignUpFrom'

export const Routes: React.FC = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/signin" component={SignInForm} />
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route exact path="/signup" component={SignUpFrom} />
        </Switch>
      </div>
    );
  };