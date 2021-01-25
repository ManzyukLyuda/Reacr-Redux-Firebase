import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import App from './components/App/App';
import FirebaseProvider from './services/firebase-service'




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);