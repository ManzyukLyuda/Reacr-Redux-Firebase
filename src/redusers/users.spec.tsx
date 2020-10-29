import {getUsers, initialState} from "./users"
import { expect } from 'chai'

describe('users reducer', () => {
    it('return the initial state', () => {
        expect(getUsers(undefined, { type: undefined, payload: [] })).deep.equal(initialState)
    })
    it('handle action USERS_LOADED', () => {
        const expectedState = {
            loading: false,
            users: []
        }
    
        expect(getUsers(initialState, { type: 'USERS_LOADED', payload: [] })).deep.equal(expectedState)
      })
})