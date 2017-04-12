import React, { Component } from 'react'
import Question from './components/Question'
import './styles.min.css'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      questions: require('./questions.json'),
      current_question_index: 0
    }
  }

  currentQuestion () {
    return this.state.questions[this.state.current_question_index]
  }

  render() {
    return (
      <div className="container">
        <div className="clearfix">
          <Question question={this.currentQuestion().question}
                    answers={this.currentQuestion().answers} />
        </div>
      </div>
    )
  }
}

export default App
