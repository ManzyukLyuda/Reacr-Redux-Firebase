
import { expect } from 'chai'

import * as Actions from './index'

describe('actions', () => {
    it('create  ADD_TODO action', () => {
        const expectedAction = {
          type: 'ADD_TODO',
          payload: {
              id: 0,
              name: 'name',
              description: 'description',
              assignedTo: 'user'
          }
        }
        expect(Actions.addTodo('name', 'description', 'user', 0)).to.deep.equal(expectedAction)
      })

      it('create TOOGLE_TODO action', ()=>{
          const expectedAction = {
                type: 'TOGGLE_TODO',
                payload: {
                        id: 0,
                }
            }
           expect(Actions.toggleTodo(0)).to.deep.equal(expectedAction)
      } )

      it('create ADD_COMMENT action', ()=>{
        const expectedAction = {
              type: 'ADD_COMMENT',
              payload: {
                  id: 1,
                  author: 'test@test.com',
                  comment: 'test',
                  parentTodo: 0,
                  
              }
          }
         expect(Actions.addComment('test@test.com', 'test', 0, 1)).to.deep.equal(expectedAction)
      } )

      it('create ADD_COLLABORATOR action', ()=>{
        const expectedAction = {
              type: 'ADD_COLLABORATOR',
              payload: {
                  collaborator: 'test@test.com',
                  parentTodo: 0,
                  
              }
          }
         expect(Actions.addCollaborator('test@test.com', 0)).to.deep.equal(expectedAction)
      } )

      it('create DELETE_TODO action', ()=>{
        const expectedAction = {
            type: 'DELETE_TODO',
            payload: {
              id: 0
            }
          }
        expect(Actions.deleteTodo(0)).to.deep.equal(expectedAction)
      })

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

      it('create USERS_LOADED action', ()=>{
        const expectedAction = {
          type: 'USERS_LOADED',
          payload: []
        }
      expect(Actions.usersLoaded([])).to.deep.equal(expectedAction) 
    })
})