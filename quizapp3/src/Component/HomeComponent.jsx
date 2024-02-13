import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeComponent.css"

export default class HomeComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="containerhome">
                <h2>Quiz App</h2>
                <Link to="/quiz">
                    <button className="playbtnstart">Play</button>
                </Link>
            </div>
        );
    }
}
