import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';
// import axios from 'axios';
import './App.css';

  const fccRecent = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(response => response.json()).then(json => json);
  const example = fetch('http://codepen.io/jobs.json').then(response => response.json()).then(json => json)
  // axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then(result => console.log(result))
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
  this.AllRequests = Promise.all([fccRecent, fccAllTime, example]).then(values => {
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
    return (
      <div className="App">
        <h1>People</h1>
        {this.state.recent.map(person => {
          return console.log(person)
        })}

      </div>
    );
  }
}

export default App;
