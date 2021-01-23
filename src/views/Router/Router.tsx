import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getUserList } from "../../services/api-service";
import { usersLoaded } from "../../actions";
import Form from "../Form/Form";
import Todo from "../../views/Todo/Todo"
import PrivateRoute from"../PrivateRout/PrivateRout"
import Spinner from "../../components/Spinner/Spinner"



// interface Props {
//     isLogedIn: boolean, 
//     users: User[], 
//     isLoading: boolean, 
//     dispatch: Dispatch
//   }
  
  const Router: React.FC = () => {
    const dispatch = useDispatch();
    const isLogedIn = useSelector((state: any) =>  state.setUser.isLogedIn);
    const isLoading = useSelector((state: any) =>  state.getUsers.loading);

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
            <Todo />
          }
        </PrivateRoute>
    </Switch>
    )
  }

export default Router