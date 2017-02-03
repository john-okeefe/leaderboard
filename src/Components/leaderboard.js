import React from 'react';
import LeaderboardItem from './leaderboard-item'

const Leaderboard = ({chart, recent, allTime, recentClass, allTimeClass}) => {
	let count = 1;
		return (
	    <div>
				<table className="table table-striped">
					<thead className="thead-default">
						<tr>
							<th className="cell">#</th>
							<th className="cell">Camper Name</th>
							<th className={recentClass} onClick={() => recent()}>Past 30 Days</th>
							<th className={allTimeClass} onClick={() => allTime()}>All Time</th>
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
