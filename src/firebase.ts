import React, { createContext, useEffect } from 'react'
// import {Firebase, Database} from './services/firebase-service';
// import { useDispatch } from 'react-redux';
// import User from './models/User';

// import * as actions from './actions';

// const FirebaseContext = createContext(null)
// export { FirebaseContext }

// export default ({children} : React.Component) => {
//     const dispatch = useDispatch();

//     const getTodos = () =>  {
//         Database.ref('todos/').on('value', (snapshot) => {
//             const data = snapshot.val();
//             data && dispatch(actions.updateTodosFromFirebase(data))    
//         })
//     }

//     const getUsers = () => {
//         Database.ref('users/').on('value', (snapshot) => {
//             const data = snapshot.val();
//             let users: User[] = Object.values(data)
//             dispatch(actions.usersLoaded(users))    
//         })
//     }

//     let firebase = {
//         app: Firebase,
//         database: Database,
//         api: {
//             getTodos,
//             getUsers
//         }
//     }

//     return (
//         <FirebaseContext.Provider value={firebase}>
//             {children}
//         </FirebaseContext.Provider>
//     )
// }
