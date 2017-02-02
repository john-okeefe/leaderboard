import React from 'react';
import LeaderboardItem from './leaderboard-item'

const Leaderboard = ({chart, recent, allTime}) => {
	let count = 1;
		return (
	    <div>
				<table className="table table-striped">
					<thead className="thead-default">
						<tr>
							<th className="cell">#</th>
							<th className="cell">Camper Name</th>
							<th className="cell" onClick={() => recent()}>Points in the past 30 days</th>
							<th className="cell" onClick={() => allTime()}>All time points</th>
						</tr>
					</thead>
					<tbody>
						{chart.map(x => {
							return <LeaderboardItem key={x.username} listType={x} count={count++} />
						})}
					</tbody>
		    </table>
	    </div>
	  )
	}

export default Leaderboard;
