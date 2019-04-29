import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import MainApplication from './MainApplication'
import TeamsDetails from './components/TeamDetails';


export const Router = (props) => (
    <Switch>
        <Route exact path={`/`} component={App} />
        <Route path={`/start`} component={MainApplication} />
        <Route path= {'/league/:code'} component={TeamsDetails}/>
    </Switch>
);