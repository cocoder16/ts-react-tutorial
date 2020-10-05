import React from 'react';
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import { WithoutRedux, WithRedux } from './pages';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ul>
                    <li><Link to='/'>without redux</Link></li>
                    <li><Link to='/redux'>with redux</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={WithoutRedux}/>
                    <Route exact path='/redux' component={WithRedux}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
