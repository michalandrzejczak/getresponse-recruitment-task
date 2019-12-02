import './App.scss';
import Header from '../Header'
import Main from '../Main';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header/>
            <Main/>
        </Router>
    );
}

export default App;
