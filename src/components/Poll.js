import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Poll extends Component {
  render() {
    const { poll, vote, authorAvatar } = this.props
    if(poll === null) {
      return <p>This poll does not exist</p>
    }
    
    return (
      <div className='poll-container'>
        <h1 className="question">{ poll.question }</h1>
        <div className="poll-author">
          By <img src={ authorAvatar } alt="Author's Avatar"/>
        </div>
        <ul>
          {['aText', 'bText', 'cText', 'dText'].map(key => (
            <li className={`option ${vote === key[0] ? 'chosen' : ''}`}>
              {vote === null
                ? poll[key]
                : <div>
                    blah
                  </div> }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, polls, users }, { match }) => {
  const { id } = match.params
  const poll = polls[id]

  if(!poll) {
    return {
      poll: null
    }
  }

  const vote = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
    if(vote !== null) {
      return vote[0]
    }
    return poll[key].includes(authedUser)
      ? key
      : vote
  }, null)

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  }
}

export default connect(mapStateToProps)(Poll)
