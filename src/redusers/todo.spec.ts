import todo from './todo'
import { expect } from 'chai'

describe('todos reducers', ()=>{

    it('returns the initial state', () =>{
        expect(todo(undefined, { type: undefined, payload: {} })).deep.equal(undefined)
    })

    it('handle action TOGGLE_TODO', () => {
        const initialState = {
            assignedTo: 'user',
             completed: false,
             description: 'description',
             id: 0,
             name: 'task',
             comments: [],
             collaborators: []
            }
        const expectedState = {
            id: 0,
            name: 'task',
            description: 'description',
            completed: true,
            assignedTo: 'user',
            comments: [],
            collaborators: []
        }
        expect(todo(initialState, { type: 'TOGGLE_TODO', payload: {id: 0} })).deep.equal(expectedState)
    })

    it('handle action ADD_COMMENT', () => {
        const initialState = {
            assignedTo: 'user',
             completed: false,
             description: 'description',
             id: 0,
             name: 'task',
             comments: [],
             collaborators: []
        }
        const expectedState = {
            id: 0,
            name: 'task',
            description: 'description',
            completed: false,
            assignedTo: 'user',
            comments: [
                {
                    id: 1,
                    author: 'user@user.com',
                    comment: 'test',
                    parentTodo: 0
                }
            ],
            collaborators: []
        }
        expect(todo(initialState, { type: 'ADD_COMMENT', payload: {id: 1, author: 'user@user.com', comment: 'test', parentTodo: 0} })).deep.equal(expectedState)
    })

    it('handle action ADD_COLLABORATOR', () => {
        const initialState = {
            assignedTo: 'user',
             completed: false,
             description: 'description',
             id: 0,
             name: 'task',
             comments: [],
             collaborators: []
        }
        const expectedState = {
            id: 0,
            name: 'task',
            description: 'description',
            completed: false,
            assignedTo: 'user',
            comments: [],
            collaborators: [ 'test@user.com' ]
        }
        expect(todo(initialState, { type: 'ADD_COLLABORATOR', payload: {parentTodo: 0, collaborator: 'test@user.com'} })).deep.equal(expectedState)
    })
})