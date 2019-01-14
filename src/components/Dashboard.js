import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {
  state = {
    showAnswered: false
  }

  showUnanswered = () => this.setState({ showAnswered: false })

  showAnswered = () => this.setState({ showAnswered: true })

  render() {
    const { showAnswered } = this.state
    const { answered, unanswered } = this.props
    const list = showAnswered ? answered : unanswered
    const listItems = list.map(poll => (
      <li key={ poll.id }>
        { poll.question }
      </li>
    ))
    const unansweredBtn = {
      textDecoration: showAnswered === false ? 'underline' : null
    }
    const answeredBtn = {
      textDecoration: showAnswered === true ? 'underline' : null
    }

    return (
      <div>
        <div className="dashboard-toggle">
          <button style={ unansweredBtn } onClick={ this.showUnanswered }>
            Unanswered
          </button>
          <span> | </span>
          <button style={ answeredBtn } onClick={ this.showAnswered }>
            Answered
          </button>
        </div>
        <ul className="dashboard-list" >
          { listItems }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, polls, users }) => {
  const answerIds = users[authedUser].answers
  const answered = answerIds.map(id => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter(id => !answerIds.includes(id))
    .map(id => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  return {
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)
