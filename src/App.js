import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    function top30(){
      return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then(data => );
    }

    this.state = {
      leaderboard: [
        {
          rank: '1',
          camperName: 'Manish-Girl',
          points30: '699',
          pointsAll: '3596'
        },
        {
          rank: '2',
          camperName: 'diomed',
          points30: '484',
          pointsAll: '2338'
        },
        {
          rank: '3',
          camperName: 'JohnPaulWalsh',
          points30: '484',
          pointsAll: '883'
        },
        {
          rank: '4',
          camperName: 'sjames1958gm',
          points30: '480',
          pointsAll: '5156'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Leaderboard />
      </div>
    );
  }
}

export default App;
