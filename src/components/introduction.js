import React, { Component } from 'react'

export default class Introduction extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="intro">
                <div className="intro-card">
                    <div className="intro-main">
                        <div className="intro-main-title">
                            Geoffrey Angus
                            </div>
                        <div className="intro-main-body">
                            Hello my name is Geoffrey Angus.
                            </div>
                    </div>
                    <div className="intro-side">
                        <div className="intro-side-image">
                            <img src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"></img>
                        </div>
                        <div className="intro-side-body">
                            Contact me here
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}