import React from 'react';

const LeaderboardItem = (props) => {
  return (
      <tr>
        <th scope="row">#</th>
        <td>{props.listType.username}</td>
        <td>{props.listType.recent}</td>
        <td>{props.listType.alltime}</td>
      </tr>
  )
}

export default LeaderboardItem;
