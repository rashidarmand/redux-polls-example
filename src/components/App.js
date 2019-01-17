import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './LeaderBoard'
import AddPoll from './AddPoll'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        { this.props.loading === true
          ? null
          : <Poll match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} /> }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)