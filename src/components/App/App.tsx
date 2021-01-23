import React from "react";
import { BrowserRouter} from "react-router-dom";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry"
import Router from "../../views/Router/Router"
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
