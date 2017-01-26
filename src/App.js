import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
import './App.css';

  const fccCharts = [{
    fccRecent: fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent'),
    fccAllTime: fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  }]

class App extends Component {
  constructor(props){
    super(props);


    this.state = {
      recent: [],
      allTime: []
    };

    // const getRecent = new Promise((resolve, reject) => {
    //
    // });

//watch video on promises to combine multiple api calls!!!
    Promise.all(fccCharts)
    .then((response) => {
      console.log(response);
      // response.json()
    })
    .then(json => {
      // console.log(json);
      // this.setState({
      //   allTime: json
      // })
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
