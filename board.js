import React, { Component } from 'react';

//components
import Box from './box.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : 1,
      nextUser: 1
    };
    this.users = [];
    this.steps = 0;
    this.background = [
      null,
      'https://img.icons8.com/ios/50/000000/delete-sign-filled.png',
      'https://img.icons8.com/ios/50/000000/unchecked-circle-filled.png'
    ];
  }

  makeAMove = (index) => {
    switch(this.state.nextUser){
      case 2:
        if(!this.users[index]) {
          ++this.steps;
          this.users[index] = {
            player: this.state.nextUser,
            background: this.background[this.state.nextUser]
          }
          this.setState({currentUser: 2, nextUser: 1});
          this.checkWinner(2);
        }
      break;
      case 1:
      default:
        if(!this.users[index]) {
          ++this.steps;
          this.users[index] = {
            player: this.state.nextUser,
            background: this.background[this.state.nextUser]
          }
          this.setState({currentUser: 1, nextUser: 2});
          this.checkWinner(1);
        }
    }
  }

  checkWinner = (player) => {
    console.log(player);
    if(this.users[0]&&this.users[1]&&this.users[2]&&this.users[0].player === player && this.users[1].player === player && this.users[2].player === player) console.log('winner is: ', player)
    else if(this.users[0]&&this.users[4]&&this.users[8]&&this.users[0].player === player && this.users[4].player === player && this.users[8].player === player) console.log('winner is: ', player)
    else if(this.users[0]&&this.users[3]&&this.users[6]&&this.users[0].player === player && this.users[3].player === player && this.users[6].player === player) console.log('winner is: ', player)
    else if(this.users[1]&&this.users[4]&&this.users[7]&&this.users[1].player === player && this.users[4].player === player && this.users[7].player === player) console.log('winner is: ', player)
    else if(this.users[2]&&this.users[4]&&this.users[6]&&this.users[2].player === player && this.users[4].player === player && this.users[6].player === player) console.log('winner is: ', player)
    else if(this.users[3]&&this.users[4]&&this.users[5]&&this.users[3].player === player && this.users[4].player === player && this.users[5].player === player) console.log('winner is: ', player)
    else if(this.users[2]&&this.users[5]&&this.users[8]&&this.users[2].player === player && this.users[5].player === player && this.users[8].player === player) console.log('winner is: ', player)
    else if(this.users[6]&&this.users[7]&&this.users[8]&&this.users[6].player === player && this.users[7].player === player && this.users[8].player === player) console.log('winner is: ', player)
  }

  render() {
    return (
      <div className="board">
        <h3> Player {this.state.currentUser}'s turn </h3>
        <br /> <br /> <br />
        {/* Boxes  */}
        <Box move={this.makeAMove} class={`box top`} user={this.users[0]} index = {0} />
        <Box move={this.makeAMove} class={`box top middle`} user={this.users[1]} index = {1} />
        <Box move={this.makeAMove} class={`box top`} user={this.users[2]}  index = {2}/>
        <Box move={this.makeAMove} class={`box top`} user={this.users[3]}  index = {3}/>
        <Box move={this.makeAMove} class={`box top middle`} user={this.users[4]}  index = {4}/>
        <Box move={this.makeAMove} class={`box top`} user={this.users[5]}  index = {5}/>
        <Box move={this.makeAMove} class={`box`} user={this.users[6]}  index = {6} />
        <Box move={this.makeAMove} class={`box middle`} user={this.users[7]}  index = {7} />
        <Box move={this.makeAMove} class={`box`} user={this.users[8]}  index = {8} />
      </div>
    )
  }

}

export default Board;