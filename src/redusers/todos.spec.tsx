import {initialState, todos} from './todos'
import { expect } from 'chai'

describe('todos reducers', ()=>{

    it('returns the initial state', () =>{
        expect(todos(undefined, { type: undefined, payload: {} })).deep.equal(initialState)
    })

    it('handle action ADD_TODO', () => {
        const expectedState = [{
            id: 0,
            name: 'task',
            description: 'description',
            completed: false,
            assignedTo: 'user',
            collaborators: [], 
            comments: []
        }]
        expect(todos(initialState, { type: 'ADD_TODO', payload: {name: 'task', description: 'description', assignedTo: 'user', id: 0, completed: false, collaborators: [], comments: []} })).deep.equal(expectedState)
    })
    it('handle action TOGGLE_TODO', () => {
        const initialState = [
            {
                assignedTo: 'user',
                 completed: false,
                 description: 'description',
                 id: 0,
                 name: 'task',
                 comments: [],
                 collaborators: []
            }
        ]
        const expectedState = [{
            id: 0,
            name: 'task',
            description: 'description',
            completed: true,
            assignedTo: 'user',
            comments: [],
            collaborators: []
        }]
        expect(todos(initialState, { type: 'TOGGLE_TODO', payload: {id: 0} })).deep.equal(expectedState)
    })

    it('handle action ADD_COMMENT', () => {
        const initialState = [
            {
                assignedTo: 'user',
                 completed: false,
                 description: 'description',
                 id: 0,
                 name: 'task',
                 comments: [],
                 collaborators: []
            }
        ]
        const expectedState = [{
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
        }]
        expect(todos(initialState, { type: 'ADD_COMMENT', payload: {id: 1, author: 'user@user.com', comment: 'test', parentTodo: 0} })).deep.equal(expectedState)
    })

    it('handle action ADD_COLLABORATOR', () => {
        const initialState = [
            {
                assignedTo: 'user',
                 completed: false,
                 description: 'description',
                 id: 0,
                 name: 'task',
                 comments: [],
                 collaborators: []
            }
        ]
        const expectedState = [{
            id: 0,
            name: 'task',
            description: 'description',
            completed: false,
            assignedTo: 'user',
            comments: [],
            collaborators: [ 'test@user.com' ]
        }]
        expect(todos(initialState, { type: 'ADD_COLLABORATOR', payload: {parentTodo: 0, collaborator: 'test@user.com'} })).deep.equal(expectedState)
    })
})