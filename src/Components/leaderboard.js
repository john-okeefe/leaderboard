import React from 'react';
import LeaderboardItem from './leaderboard-item'

const Leaderboard = (props) => {
	let rowItems;
	const Sorter = (bool) => {
		if (bool){
			return (a,b) => b.recent - a.recent;
		}else{
			return (a,b) => a.recent - b.recent;
		}
	}
	const switchType = (type) => {
		if(type === "recent"){
			rowItems = props.recent.map((x) => {
				return <LeaderboardItem key={x.username} listType={x} />
			})
		}else if (type === "allTime") {
			rowItems = props.allTime.map((x) => {
				return <LeaderboardItem key={x.username} listType={x} />
			})
		}
	};
	let recentButtonSort = Sorter(true);

	if(props.recent === [] && props.allTime === []){
		return console.log("Loading...")
	}else{
		return (
	    <div>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Camper Name</th>
							<th onClick={switchType("recent")}>Points in the past 30 days</th>
							<th onClick={switchType("allTime")}>All time points</th>
						</tr>
					</thead>
					<tbody>
						{rowItems}
					</tbody>
		    </table>
	    </div>
	  )
	}
}

export default Leaderboard;
