import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'dan_abramov'

export function handleInitialData() {
  return (dispatch) => getInitialData()
    .then(({ users, polls }) => {
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
      dispatch(setAuthedUser(AUTHED_ID))
    })
}