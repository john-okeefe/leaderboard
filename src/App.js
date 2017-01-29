import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
// import axios from 'axios';
import './App.css';

  const fccRecent = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => response.json()).then(json => json);
  const fccAllTime = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(response => response.json()).then(json => json);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recent: [],
      allTime: []
    };

    let _this = this;
    this.AllRequests = Promise.all([fccRecent, fccAllTime]).then(values => {
      _this.setState({
        recent: values[0],
        allTime: values[1]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Leaderboard recent={this.state.recent} allTime={this.state.allTime} />
      </div>
    );
  }
}

export default App;
