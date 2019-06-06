import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import AuthorizationPage from "./pages/AuthorizationPage"
import  WeatherPage from "./pages/WeatherPage"
import './App.css';
import "bootstrap/dist/css/bootstrap.css"


function App() {
    return (
        <div className="App">
            <Router>
                <Route path={"/dashboard"} component={() => <WeatherPage/>}/>
                <Route path={"/"} exact component={() => <AuthorizationPage/>}/>
            </Router>
        </div>
    );
}

export default App;
