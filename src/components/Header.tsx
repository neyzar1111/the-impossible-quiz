import React,{useState,useEffect}  from "react"
import {Link} from "react-router-dom";




export const Header: React.FC  = () => {

    return (
        <header>
            <h1>Quiz App</h1>
            <nav>

                <ul>

                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/FirstPartQuestions">
                        <li>Quiz Part1</li>
                    </Link>

                    <Link to="/SecondPartQuestions">
                        <li>Quiz Part2</li>
                    </Link>

                </ul>

            </nav>
        </header>

    );
};

