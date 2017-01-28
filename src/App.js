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
}
componentDidMount() {
  let _this = this;
  this.AllRequests = Promise.all([fccRecent, fccAllTime]).then(values => {
    _this.setState({
      recent: values[0],
      allTime: values[1]
    })
  })
}
  render() {
    // <Leaderboard allTime={this.state.allTime} recent={this.state.recent} />
    // console.log(this.state.recent)
    //getting tip in http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
    const condenseRecent = this.state.recent.map(x => x);
    const condenseAllTime = this.state.allTime.map(x => x);
    return (
      <div className="App">
        <Leaderboard recent={condenseRecent} allTime={condenseAllTime} />
      </div>
    );
  }
}

export default App;
