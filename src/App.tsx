import React,{useState}from 'react';
import './App.css';
import {Header} from "./components/Header";
import {FirstPartQuestions} from "./components/FirstPartQuestions";
import {SecondPartQuestions} from "./components/SecondPartQuestions";
import {Home} from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="myQuizApp">
                <Header />
                <switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/FirstPartQuestions" component={FirstPartQuestions}/>
                    <Route  path="/SecondPartQuestions" component={SecondPartQuestions}/>
                </switch>

            </div>
        </Router>

    );
}

export default App;
