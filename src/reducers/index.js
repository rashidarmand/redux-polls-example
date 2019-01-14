import users from './users'
import authedUser from './authedUser'
import polls from './polls'
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer
})