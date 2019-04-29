import React from 'react';
import { connect } from "react-redux";
import {  getLeaguesStandings } from './../actions/leaguesAction';
import TeamDetails from '../components/TeamDetails';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLeaguesStandings({
            code: this.props.code
        });
    }

    render() {
        let standings = {};

        const standingsState = this.props.state;

        if (standingsState.loaded === true) {
            standings = standingsState.data;
        }

        return (
            <div id="home-container" className="container">
                <div className="text-center">
                    <h1>Welcome in newsletter!</h1>
                </div>

                <div>
                    {
                        standingsState.loaded === true ? <TeamDetails standings={standings}/> : <span>Loading...</span>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    standings: state.standings
});

const mapDisptachToProps = (dispatch, props) => ({
    getLeaguesStandings: ({ code }) => {
        return dispatch(getLeaguesStandings({ code }));
    }
});

export default connect(mapStateToProps, mapDisptachToProps)(HomeContainer);