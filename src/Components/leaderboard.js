import React from 'react';
import LeaderboardItem from './leaderboard-item'

const Leaderboard = ({chart, recent, allTime}) => {
	// props.setState({chart: props.allTime})
		return (
	    <div>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Camper Name</th>
							<th onClick={() => recent}>Points in the past 30 days</th>
							<th onClick={() => {
										console.log("I've been clicked");
										return allTime
									}}>All time points</th>
						</tr>
					</thead>
					<tbody>
						{chart.map(x => {
							return <LeaderboardItem key={x.username} listType={x} />
						})}
					</tbody>
		    </table>
	    </div>
	  )
	}

export default Leaderboard;
