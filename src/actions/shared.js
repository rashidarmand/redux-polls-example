import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'dan_abramov'

export function handleInitialData() {
  return (dispatch) => {
    // Show Loading Initially
    dispatch(showLoading())
    return getInitialData()
    .then(({ users, polls }) => {
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
      dispatch(setAuthedUser(AUTHED_ID))
      // Hide Loading Once Promise Resolves with data
      dispatch(hideLoading())
    })
  }
}