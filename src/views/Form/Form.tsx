import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignIn';
import SignUpFrom from '../../components/SignUpForm/SignUpFrom'
import Tabs from '../../components/Tabs/tabs'



const FormRout: React.FC = () => {

    let { path} = useRouteMatch();

    return (
      <div className="from-wrap">
        <Tabs />
        <Switch>
          <Route exact path={`${path}/signin`}>
              < SignInForm/>
          </Route>
          <Route path={`${path}/signup`}>
              <SignUpFrom />
          </Route>
          <Route path={path}>
             <Redirect to={`${path}/signin`}/>
          </Route>
        </Switch>
      </div>
    );
  };

export default FormRout;