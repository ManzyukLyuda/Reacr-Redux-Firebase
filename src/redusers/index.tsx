import { combineReducers } from 'redux'
import { todos } from './todos'
import { setUser } from './logIn'
import { getUsers }  from './users'
import { firebaseLoading } from './loading'

export default combineReducers({
  todos,
  setUser,
  getUsers,
  firebaseLoading
})
