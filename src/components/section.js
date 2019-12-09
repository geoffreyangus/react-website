import React, { Component } from 'react'

export default class Section extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card-section">
                <div className="cards-title">
                    Projects
                </div>
                <div className="card-wrapper">
                    <div className="card">hello</div>
                    <div className="card">hello</div>
                    <div className="card">hello</div>
                </div>
            </div>
        )
    }
}