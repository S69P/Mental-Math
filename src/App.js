import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value1 : Math.floor(Math.random() * 100),
      value2 : Math.floor(Math.random() * 100),
      value3 : Math.floor(Math.random() * 100),
      proposedAnswer : () => (Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3),
      proposed : null,
      numQuestions : 0,
      numCorrect : 0
    }
  }
  
  checkIfTrue(){
    return (this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposed)
  }
  componentWillMount(){
    this.setState({proposed : this.state.proposedAnswer()})
  }
  componentWillUpdate(){
    console.log('will updated')
    //this.setState({proposed : this.state.proposedAnswer()})

  }


  componentDidUpdate(){
    console.log('updated')
    //this.setState({proposed : this.state.proposedAnswer()})
  }
  
  onClick(e){
    switch(e.target.value){
      case 'true':
        
        (this.checkIfTrue()) ? this.setState({
          numQuestions :  this.state.numQuestions + 1,
          numCorrect : this.state.numCorrect + 1,
          value1 : Math.floor(Math.random() * 100),
          value2 : Math.floor(Math.random() * 100),
          value3 : Math.floor(Math.random() * 100),
          //proposed : (Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3)

        }) : this.setState({
          numQuestions :  this.state.numQuestions + 1,
          numCorrect : this.state.numCorrect - 1,
          value1 : Math.floor(Math.random() * 100),
          value2 : Math.floor(Math.random() * 100),
          value3 : Math.floor(Math.random() * 100),
          //proposed : (Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3)

        })

        break
      case 'false':
      (!this.checkIfTrue()) ? this.setState({
        numQuestions :  this.state.numQuestions + 1,
        numCorrect : this.state.numCorrect + 1,
        value1 : Math.floor(Math.random() * 100),
        value2 : Math.floor(Math.random() * 100),
        value3 : Math.floor(Math.random() * 100),
        //proposed : (Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3)

      }) : this.setState({
        numQuestions :  this.state.numQuestions + 1,
        numCorrect : this.state.numCorrect - 1,
        value1 : Math.floor(Math.random() * 100),
        value2 : Math.floor(Math.random() * 100),
        value3 : Math.floor(Math.random() * 100),
        //proposed : (Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3)

      })

        break
      default:
        break
    }
  }

  render() {
    const {value1, value2, value3,proposed, numQuestions, numCorrect} = this.state
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposed}`}</p>
            <p className="text">{ value1 + value2  +  value3 }</p>
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
