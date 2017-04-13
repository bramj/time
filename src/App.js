import React, { Component } from 'react'
import Question from './components/Question'
import './styles.min.css'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      questions: require('./questions.json'),
      current_question_index: 0,
      selected: null
    }
  }

  currentQuestion () {
    return this.state.questions[this.state.current_question_index]
  }

  handleSubmit (event) {
    debugger
  }

  handleAnswerChange (event) {
    this.setState({selected: parseInt(event.target.value)})
  }

  render() {
    return (
      <div className="container">
        <div className="clearfix">
          <Question question={this.currentQuestion().question}
                    answers={this.currentQuestion().answers}
                    selected={this.state.selected}
                    onSubmit={this.handleSubmit.bind(this)}
                    onAnswerChange={this.handleAnswerChange.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App
