import React, { Component } from 'react';

const Leaderboard = (props) => {
  console.log(props)
  console.log(props.rank.map(x => x.username))
  return (
    <div>Name: {props.rank.map(x => x.username)}</div>
  )
}

export default Leaderboard;
