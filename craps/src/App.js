import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalScore: 0
    };

    this.printRandomDiceOne = this.printRandomDiceOne.bind(this);
    this.printRandomDiceTwo = this.printRandomDiceTwo.bind(this);
    // this.printTotalPointS = this.printTotalPointS.bind(this);
  }

  printRandomDiceOne = (min, max) => {
    this.setState({
      totalScore: this.state.totalScore - this.state.totalScore
    })
    console.log('1st Dice');
    var diceOneScore = Math.floor(Math.random() * (max - min + 1)) + min; 
    console.log(diceOneScore);
    this.setState({
        totalScore: this.state.totalScore + diceOneScore
    }, () => {
      this.printRandomDiceTwo(min, max);  
    });
  }

  printRandomDiceTwo = (min, max) => {
    console.log('2nd Dice');
    var diceTwoScore = Math.floor(Math.random() * (max - min + 1)) + min; 
    console.log(diceTwoScore);
    this.setState({
      totalScore: this.state.totalScore + diceTwoScore
    }, () => {
      console.log('Total points for the game is: ' + this.state.totalScore);  
    });
  }

  // printTotalPointS = () => {
  //     console.log('The total point for the game is: ' + this.state.totalScore);
  // }

  render() {
    return (
      <div>
        <button onClick={() => { this.printRandomDiceOne(1, 6); }}>
          Roll Dice
        </button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
