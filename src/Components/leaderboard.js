import React from 'react';
import LeaderboardItem from './leaderboard-item'

const Leaderboard = (props) => {
	props.setState({chart: props.allTime})
		return (
	    <div>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Camper Name</th>
							<th>Points in the past 30 days</th>
							<th>All time points</th>
						</tr>
					</thead>
					<tbody>
						{props.chart.map(x => {
							return <LeaderboardItem key={x.username} listType={x} />
						})}
					</tbody>
		    </table>
	    </div>
	  )
	}

export default Leaderboard;
