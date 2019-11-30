import React from 'react';
import './Main.scss';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Recipes from '../Recipes';
import Challenge from '../Challenge';
import Error404 from '../Error404';

function Main() {
    return (
        <main>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" render={() => <Dashboard/>}/>
                    <Route path="/recipes" render={() => <Recipes/>}/>
                    <Route path="/challenge" render={() => <Challenge/>}/>
                    <Route component={Error404}/>
                </Switch>
            </div>
        </main>
    );
}

export default Main;
