import actionTypes from "./actionTypes";

interface State {
            email: string | null,
            isLogedIn: boolean;
        }

const initioalState = {
    email: null, 
    isLogedIn: false
}

interface ActionLogIn {type: typeof actionTypes.logIn.USER_LOG_IN, user: string};
interface ActionLogOut {type: typeof actionTypes.logIn.USER_LOG_OUT, user?: null};
type Action = ActionLogIn | ActionLogOut;

const logInUser = (state: State = initioalState, action: Action) => {
    switch (action.type){
        case  actionTypes.logIn.USER_LOG_IN:
            return {
                email: action.user,
                isLogedIn: true
            }
        
        case actionTypes.logIn.USER_LOG_OUT:
            return initioalState;
        
        default:
            return state
    }
};

export {
    logInUser,
    initioalState
};