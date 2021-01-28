const actionTypes =  {
    loading: {
        'FIREBASE_START_LOADING': 'FIREBASE_START_LOADING',
        'FIREBASE_END_LOADING': 'FIREBASE_END_LOADING'
    },
    logIn: {
        'USER_LOG_IN': 'USER_LOG_IN', 
        'USER_LOG_OUT': 'USER_LOG_OUT'
    },
    todos: {
        'UPDATE_TODOS': 'UPDATE_TODOS', 
        'ADD_TODO': 'ADD_TODO', 
        'TOGGLE_TODO': 'TOGGLE_TODO', 
        'ADD_COMMENT': 'ADD_COMMENT',
        'ADD_COLLABORATOR': 'ADD_COLLABORATOR'
    },
    users: {
        'GET_USERS': 'GET_USERS',

    },
    error: {
        'FIREBASE_GET_ERROR': 'FIREBASE_GET_ERROR',
        'FIREBASE_CLEAR_ERROR': 'FIREBASE_CLEAR_ERROR'
    }
}

export default actionTypes;