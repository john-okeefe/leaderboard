import React from 'react';

const Leaderboard = (props) => {
	function compareRecent(a,b) {
  if (a.recent < b.recent)
    return -1;
  if (a.recent > b.recent)
    return 1;
  return 0;
}
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
	    		{ recentName.sort((a,b) => b.recent - a.recent).map(x => <li>Name: <strong>{x.username}</strong> Recent: <strong>{x.recent}</strong></li>) }
	    	</ul>
	    </div>
    </div>
  )
}
}

export default Leaderboard;
