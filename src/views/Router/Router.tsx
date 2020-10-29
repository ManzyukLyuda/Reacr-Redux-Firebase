import React, { useEffect } from "react";
import { Dispatch } from "redux"
import { Route, Switch } from "react-router-dom";
import { getUserList } from "../../services/api-service";
import { usersLoaded } from "../../actions";
import Form from "../Form/Form";
import Todo from "../../conteiners/TodoPage"
import PrivateRoute from"../PrivateRout/PrivateRout"
import User from "../../models/User";
import Spinner from "../../components/Spinner/Spinner"


interface Props {
    isLogedIn: boolean, 
    users: User[], 
    isLoading: boolean, 
    dispatch: Dispatch
  }
  
  const Router: React.FC<Props> = (props: Props) => {
    const {isLogedIn, dispatch, users, isLoading} = props;
    useEffect(() => {
      getUserList().then(
          response => {
            dispatch(usersLoaded(response))
          }
        );
  })
    return (
    <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <PrivateRoute path="/" isAutorixed={isLogedIn}> 
          {isLoading ?
            <Spinner /> :
            <Todo users = {users} />
          }
        </PrivateRoute>
    </Switch>
    )
  }

export default Router