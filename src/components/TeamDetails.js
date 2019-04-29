import React from 'react';
import Team from './Team';


export default class TeamsDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            code: ""
        }

    }
    

    componentDidMount () {
        const { code } = this.props.match.params
        this.setState({
            code: code
        })
    }


    render() {

       
        return (
            <div className="container">
                {this.state.code}
            </div>
        );
    }
}