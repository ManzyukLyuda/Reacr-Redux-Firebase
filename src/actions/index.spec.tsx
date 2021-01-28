
import { expect } from 'chai'

import * as Actions from './index'

describe('actions', () => {

      it('create USER_LOG_IN action', ()=>{
          const expectedAction = {
            type: 'USER_LOG_IN',
            user: 'user@gmail.com'
          }
        expect(Actions.userLogIn('user@gmail.com')).to.deep.equal(expectedAction) 
      })

      it('create USER_LOG_OUT action', ()=>{
        const expectedAction = {
          type: 'USER_LOG_OUT',
        }
      expect(Actions.userLogOut()).to.deep.equal(expectedAction) 
    })

      it('create GET_USERS action', ()=>{
        const expectedAction = {
          type: 'GET_USERS',
          payload: []
        }
      expect(Actions.usersLoaded([])).to.deep.equal(expectedAction) 
    })
})