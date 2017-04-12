import React, { Component } from 'react'
import Question from './components/Question'
import './styles.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question question="Is this a question?" />
      </div>
    );
  }
}

export default App;
