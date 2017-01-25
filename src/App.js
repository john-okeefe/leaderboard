import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

const fccRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const fccAllTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends Component {
  constructor(props){
    super(props);


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
