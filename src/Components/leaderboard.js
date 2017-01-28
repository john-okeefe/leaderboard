import React from 'react';

const Leaderboard = (props) => {
	let Sorter = (bool) => {
		if (bool){
			return (a,b) => b.recent - a.recent;
		}else{
			return (a,b) => a.recent - b.recent;
		}
	}
	let recentButtonSort = Sorter(true);


	if(!props.recent){
		return console.log("Loading...")
	}else{
	const recentName = props.recent;
	const allTimeName = props.allTime.username;
	console.log(recentName)
  return (
    <div>
			<table>
				<tbody>
	      <tr>
	        <th>
	          Camper Name
	        </th>
	        <th>
	          Points in the past 30 days
	        </th>
	        <th>
	          All time points
	        </th>
	      </tr>
	      <tr>
					{/*Check this out for help creating this thing:
					http://stackoverflow.com/questions/39462458/react-js-creating-simple-table
					Also google search: https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=make+a+table+in+react */
				}
	        <td>{ recentName.sort(recentButtonSort).map(x => x.username) }</td>
					<td>{ recentName.sort(recentButtonSort).map(x => x.recent) }</td>
		      <td>{ recentName.sort(recentButtonSort).map(x => x.allTime) }</td>
	      </tr>
				</tbody>
	    </table>
			{
			// <h1>FreeCodeCamp Leaderboard</h1>
			// <div>
			// 	<ul>
			// 		{ recentName.sort(recentButtonSort).map(x => <li>Name: <strong>{x.username}</strong> Recent: <strong>{x.recent}</strong></li>) }
			// 	</ul>
			// </div>
		}
    </div>
  )
}
}

export default Leaderboard;
