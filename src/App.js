import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

  const fccCharts = [{    
    fccRecent: fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => response.json()),
    fccAllTime: fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(response => response.json())
  }]

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      recent: fccCharts[0].fccRecent,
      allTime: fccCharts[0].fccAllTime
    };

    // const getRecent = new Promise((resolve, reject) => {
    //
    // });

//watch video on promises to combine multiple api calls!!!
    // Promise.all(fccCharts)
    // .then((response) => {
    //   this.setState = {
    //     recent: response[0].fccRecent,
    //     allTime: response[0].fccAllTime
    //   }
    // })

  }
  render() {
    return (
      <div className="App">
        My App
        <Leaderboard allTime={this.state.allTime} recent={this.state.recent} />
      </div>
    );
  }
}

export default App;
