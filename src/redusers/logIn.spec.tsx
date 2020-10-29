import {initioalState, setUser} from "./logIn";
import { expect } from 'chai'

describe('user log in reducer', ()=>{
    
    it('return the initial state', ()=>{
        expect(setUser(undefined, { user: null, type: undefined })).deep.equal(initioalState);
    })

    it('handle action LOG_IN', ()=>{
        const expectedState = {
            user: 'user@email.com',
            isLogedIn: true
        }
        expect(setUser(initioalState, {type: 'USER_LOG_IN', user: 'user@email.com'})).deep.equal(expectedState)
    })

    it('handle action LOG_OUT', ()=>{
        expect(setUser(initioalState, {type: 'USER_LOG_OUT'})).deep.equal(initioalState)
    })
})
