import React, { Component } from 'react'

import NavBar from './navbar'
import Introduction from './introduction'
import Section from './section'

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = { data: null };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/geoffreyangus/react-website/master/data/home.json')
            .then(res => res.json())
            .then(res => this.setState({ data: res }));
    }

    render() {
        const { data } = this.state
        if (data != null) {
            console.log(data)
            const data_intro = data['introduction']
            const data_projects = data['projects']
            const data_teaching = data['teaching']
            return (
                <div id="home">
                    {/* <div id="navbar-space"></div> */}
                    <NavBar />
                    <div id="wrapper">
                        <Introduction text={data_intro['description']} image={data_intro['image']} />
                        <Section sectionType="Projects" data={data_projects} />
                        <Section sectionType="Teaching" data={data_teaching} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="home">
                    <NavBar />
                    <div id="wrapper">
                    </div>
                </div>
            )
        }

    }
}


