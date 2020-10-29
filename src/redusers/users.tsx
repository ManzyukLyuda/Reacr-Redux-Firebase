import User from '../models/User'

type State = {
    users: User[],
    loading: boolean
};

const initialState = {
    users: [],
    loading: true
};

const getUsers = (state: State = initialState, action: {type: string | undefined, payload: User[]}) => {
    switch(action.type){
        case 'USERS_LOADED':
            return {
                users: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export {
    getUsers,
    initialState
} 