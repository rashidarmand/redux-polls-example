import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddPoll(this.state))
    this.props.history.push('/')
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  isDisabled = () => {
    const { question, a, b, c, d } = this.state
    return [ question, a, b, c, d ].some(val => val === '')
  }

  render() {
    const { question, a, b, c, d } = this.state
    return (
      <form className="add-form" onSubmit={ this.handleSubmit }>
        <h3 style={{ marginBottom: 5 }}>What Is Your Question?</h3>
        <input 
          type="text"
          name="question"
          className="input"
          value={ question }
          onChange={ this.handleChange }
        />

        <h3>What Are The Options?</h3>
        <label htmlFor="a" className="label">A.</label>
        <input 
          type="text"
          name="a"
          className="input"
          id="a"
          value={ a }
          onChange={ this.handleChange }
        />

        <label htmlFor="b" className="label">B.</label>
        <input 
          type="text"
          name="b"
          className="input"
          id="b"
          value={ b }
          onChange={ this.handleChange }
        />

        <label htmlFor="c" className="label">C.</label>
        <input 
          type="text"
          name="c"
          className="input"
          id="c"
          value={ c }
          onChange={ this.handleChange }
        />  


        <label htmlFor="d" className="label">D.</label>
        <input 
          type="text"
          name="d"
          className="input"
          id="d"
          value={ d }
          onChange={ this.handleChange }
        />

        <button className="btn" type="submit" disabled={ this.isDisabled() } >Submit</button>
      </form>
    )
  }
}

export default connect()(AddPoll)

