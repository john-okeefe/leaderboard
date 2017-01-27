import React from 'react';

const Leaderboard = (props) => {
	// console.log(props.recent.then(x => x.map(y => y.username)));
  // 	console.log(props.allTime);
  // console.log(props.rank.map(x => x.username))
    // {props.rank.map(x => x.username)}
		// {props.recent.then(x => x.map(y => y.username))}
  return (
    <div>Recent Name: {props.recent}
    </div>
  )
}

export default Leaderboard;
