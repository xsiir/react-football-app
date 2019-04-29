import React from 'react';
import {Link} from 'react-router-dom';

const Team = (item, key) => {
    const { league, code } = item;
    console.log(item)
    debugger
    return (
        <tr key={key}>
            <td>{league}</td>
            <td><Link to={`league/${code}`}>Details</Link> </td>

        </tr>
    );
}

export default Team;