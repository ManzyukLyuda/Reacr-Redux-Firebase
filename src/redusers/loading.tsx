interface State{
    isLoading: boolean
}

const initialState = {
    isLoading: false
}

interface ActionFirebaseStartLoading {type: 'FIREBASE_START_LOADING'}
interface ActionFirebaseENDLoading {type: 'FIREBASE_END_LOADING'}
type Action = ActionFirebaseStartLoading | ActionFirebaseENDLoading;

export const firebaseLoading = (state: State = initialState, action: Action) =>{
    switch(action.type){
        case 'FIREBASE_START_LOADING':
            return{
                isLoading: true
            }
        case 'FIREBASE_START_LOADING':
            return{
                isLoading: false
            }
        default:
            return state
    }

}