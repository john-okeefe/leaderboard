import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

// const fccRecent = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
const fccAllTime = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      allTime: [],
    };

//watch video on promises to combine multiple api calls!!!
    fccAllTime
    .then((response) => response.json())
    .then(json => {
      this.setState({
        allTime: json
      })
    })

  }
  render() {
    return (
      <div className="App">
        My App
        <Leaderboard rank={this.state.allTime} />
      </div>
    );
  }
}

export default App;
