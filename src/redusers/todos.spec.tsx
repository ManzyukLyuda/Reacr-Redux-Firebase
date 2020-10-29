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
            assignedTo: 'user'
        }]
        expect(todos(initialState, { type: 'ADD_TODO', payload: {name: 'task', description: 'description', assignedTo: 'user', id: 0, completed: false} })).deep.equal(expectedState)
    })
    it('handle action TOGGLE_TODO', () => {
        const initialState = [
            {
                assignedTo: 'user',
                 completed: false,
                 description: 'description',
                 id: 0,
                 name: 'task',
            }
        ]
        const expectedState = [{
            id: 0,
            name: 'task',
            description: 'description',
            completed: true,
            assignedTo: 'user'
        }]
        expect(todos(initialState, { type: 'TOGGLE_TODO', payload: {id: 0} })).deep.equal(expectedState)
    })
})