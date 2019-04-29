import React from 'react';
import Team from './Team';


export default class TeamsTable extends React.Component {


    render() {

        var leagues = [
            {league: "England", code: "PL1"},
            {league: "Spain", code: "SA"},
            {league: "Germany", code: "BL1"}
        ]
        
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>League</td>
                            <td>Code</td>
                        </tr>
                    </thead>
                    <tbody>
                        {leagues.map((item, key) => Team(item, key))}
                    </tbody>
                </table>
            </div>
        );
    }
}