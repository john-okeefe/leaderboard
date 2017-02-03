import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

const fccRecent = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => response.json()).then(json => json);
const fccAllTime = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(response => response.json()).then(json => json);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chart: [],
    };

    fccRecent.then(x => this.setState({chart: x}))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="boardHeader"><h2>FreeCodeCamp Leaderboard</h2></div>
          <Leaderboard chart={this.state.chart}
            recent={() => fccRecent.then(x => this.setState({chart: x}))}
            allTime={() => fccAllTime.then(x => this.setState({chart: x}))}
          />
        </div>
      </div>
    );
  }
}

export default App;
