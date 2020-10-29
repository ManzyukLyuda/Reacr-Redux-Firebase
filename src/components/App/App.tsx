import React from "react";
import { BrowserRouter} from "react-router-dom";
import ErrorBoundry from "../Error-boundry/Error-boundry"
import Router from "../../conteiners/Router"
import "./App.css";

const App: React.FC = () => {
  return (
    <ErrorBoundry>
      <BrowserRouter>
        < Router />
      </BrowserRouter>
    </ErrorBoundry>
  )
}

export default App;
