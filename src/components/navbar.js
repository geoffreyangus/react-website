import React, { Component } from 'react'
import logo from '../logo.svg';

export default class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="navbar">
                <div className="head-icons">\
                    <img className="icon" src={logo} />
                    <img className="icon" src={logo} />
                    <img className="icon" src={logo} />
                </div>
                <div className="foot-icons">\
                    {/* <img className="icon" src={logo} />
                    <img className="icon" src={logo} />
                    <img className="icon" src={logo} /> */}
                </div>
            </div>
        )
    }
}


