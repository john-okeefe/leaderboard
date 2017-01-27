import React from 'react';

const Leaderboard = (props) => {

	if(!props.recent){
		return console.log("Loading...")
	}else{
	const recentName = props.recent;
	const allTimeName = props.allTime.username;
	console.log(recentName)
  return (
    <div>
	    <h1>Recent Name:</h1>
	    <div>
	    	<ul>
	    		{ recentName.map(x => <li>{x.username}</li>) }
	    	</ul>
	    </div>
    </div>
  )
}
}

export default Leaderboard;
