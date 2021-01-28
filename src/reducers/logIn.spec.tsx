import {initioalState, logInUser} from "./logIn";
import { expect } from 'chai'

describe('user log in reducer', ()=>{
    
    it('return the initial state', ()=>{
        expect(logInUser(undefined, { user: null, type: undefined })).deep.equal(initioalState);
    })

    it('handle action LOG_IN', ()=>{
        const expectedState = {
            email: 'user@email.com',
            isLogedIn: true
        }
        expect(logInUser(initioalState, {type: 'USER_LOG_IN', user: 'user@email.com'})).deep.equal(expectedState)
    })

    it('handle action LOG_OUT', ()=>{
        expect(logInUser(initioalState, {type: 'USER_LOG_OUT'})).deep.equal(initioalState)
    })
})
