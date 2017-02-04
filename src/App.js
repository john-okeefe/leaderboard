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
      recentClass: 'cell text-center active',
      allTimeClass: 'cell text-center inactive'
    };

    fccRecent.then(x => this.setState({
      chart: x,
      recentClass: 'cell text-center active',
      allTimeClass: 'cell text-center inactive'
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <div className="boardHeader"><h2>FreeCodeCamp Leaderboard</h2></div>
            <Leaderboard chart={this.state.chart}
              recent={() => fccRecent.then(x => this.setState({
                chart: x,
                recentClass: 'cell text-center active',
                allTimeClass: 'cell text-center inactive'
              }))}
              allTime={() => fccAllTime.then(x => this.setState({
                chart: x,
                recentClass: 'cell text-center inactive',
                allTimeClass: 'cell text-center active'
              }))}
              recentClass={this.state.recentClass}
              allTimeClass={this.state.allTimeClass}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
