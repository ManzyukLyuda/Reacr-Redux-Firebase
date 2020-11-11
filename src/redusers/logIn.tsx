interface State {
            user: string | null,
            isLogedIn: boolean;
        }

const initioalState = {
    user: null, 
    isLogedIn: false
}

interface ActionLogIn {type: 'USER_LOG_IN', user: string};
interface ActionLogOut {type: 'USER_LOG_OUT'};
interface ActionInit {type: undefined, user: null}
type Action = ActionLogIn | ActionLogOut | ActionInit;

const setUser = (state: State = initioalState, action: Action) => {
    switch (action.type){
        case  'USER_LOG_IN':
            return {
                email: action.user,
                isLogedIn: true
            }
        case 'USER_LOG_OUT':
            return{
                email: null,
                isLogedIn: false
            }
        default:
            return state
    }
};

export {
    setUser,
    initioalState
};