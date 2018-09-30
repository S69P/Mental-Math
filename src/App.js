import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'

class App extends Component {

    constructor(props) {
    super(props);
    this.state = {
      game : new Game()
    }
  }

  
  checkIfTrue(){
    return (this.state.game.value1 + this.state.game.value2 + this.state.game.value3 === this.state.game.proposedAnswer)
  }
  
  
  onClick(e){
    switch(e.target.value){
      case 'true':
        
        (this.checkIfTrue()) ? this.setState({
          game : new Game(this.state.game.numQuestions + 1,this.state.game.numCorrect + 1)
        }) : this.setState({
          game : new Game(this.state.game.numQuestions + 1,this.state.game.numCorrect)
        })

        break
      case 'false':
      (!this.checkIfTrue()) ? this.setState({
        game : new Game(this.state.game.numQuestions + 1,this.state.game.numCorrect + 1)
      }) : this.setState({
        game : new Game(this.state.game.numQuestions + 1,this.state.game.numCorrect)
      })

        break
      default:
        break
    }
  }

  render() {
    const {value1, value2, value3, proposedAnswer, numQuestions, numCorrect} = this.state.game
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.onClick.bind(this)} value='true'>True</button>
          <button onClick={this.onClick.bind(this)}  value='false'>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
