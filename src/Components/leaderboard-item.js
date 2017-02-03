import React from 'react';

const LeaderboardItem = (props) => {
  return (
      <tr>
        <th scope="row" className="cell">{props.count}</th>
        <td className="cell text-left"><img className="profile-image" src={props.listType.img}></img>{props.listType.username}</td>
        <td className="cell">{props.listType.recent}</td>
        <td className="cell">{props.listType.alltime}</td>
      </tr>
  )
}

export default LeaderboardItem;
