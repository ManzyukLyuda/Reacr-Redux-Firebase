import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Form from "../Form/Form";
import Todo from "../../views/Todo/Todo"
import PrivateRoute from"../PrivateRout/PrivateRout"
import Spinner from "../../components/Spinner/Spinner"
  
  const Router: React.FC = () => {
    const isLogedIn = useSelector((state: any) =>  state.setUser.isLogedIn);
    
    return (
    <Switch>
        <Route path="/form">
          <Spinner>
              <Form />
          </Spinner>
         
        </Route>
        <PrivateRoute path="/" isAutorixed={isLogedIn}> 
              <Todo />
        </PrivateRoute>
    </Switch>
    )
  }

export default Router