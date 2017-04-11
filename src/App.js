import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

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
