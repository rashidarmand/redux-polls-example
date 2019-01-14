import users from './users'
import authedUser from './authedUser'
import polls from './polls'
import { combineReducers } from 'redux';

export default combineReducers({
  authedUser,
  users,
  polls
})