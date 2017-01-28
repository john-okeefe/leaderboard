import React from 'react';

const Leaderboard = (props) => {
	let recentSorter = (bool) => {
		if (bool){
			return (a,b) => b.recent - a.recent;
		}else{
			return (a,b) => a.recent - b.recent;
		}
	}
	let recentButtonSort = recentSorter(true);

	
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
	    		{ recentName.sort(recentButtonSort).map(x => <li>Name: <strong>{x.username}</strong> Recent: <strong>{x.recent}</strong></li>) }
	    	</ul>
	    </div>
    </div>
  )
}
}

export default Leaderboard;
