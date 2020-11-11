import { combineReducers } from 'redux'
import { todos } from './todos'
import { setUser } from './logIn'
import { getUsers }  from './users'
// import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  setUser,
  getUsers,
})
