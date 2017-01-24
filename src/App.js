import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

const fccRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const fccAllTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getData(url){
  function checkStatus(response){
    if(response.status === 200){
      return Promise.resolve(response);
    }else{
      return Promise.reject(
        new Error(response.statusText)
      );
    }
  }

  function getJSON(response){
    return response.json();
  }

    return fetch(url)
    .then(checkStatus)
    .then(getJSON)
    .then((data) => {
      // console.log('DATA', data);
      return data;
    })
    .catch((err) => err);
}

let fccRecentData = getData(fccRecent);

console.log(fccRecentData[0]);

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
