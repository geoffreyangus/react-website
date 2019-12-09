import React, { Component } from 'react'
import TeachingCard from './teaching'
import ProjectsCard from './projects'

export default class Section extends Component {
    constructor() {
        super();
    }

    render() {
        const sectionType = this.props.sectionType

        let cards = []
        for (const r of this.props.data) {
            console.log(r)
            if (sectionType == 'Projects') {
                cards.push(<ProjectsCard
                    title={r['title']}
                    authors={r['authors']}
                    publication={r['publication']}
                    description={r['description']}
                    image={r['image']}
                    resources={r['resources']}
                />)
            }
            else {
                cards.push(<TeachingCard/>)
            }
        }
        return (
            <div className="card-section">
                <div className="cards-title">
                    {sectionType == 'Projects' ? 'Projects' : 'Teaching'}
                </div>
                <div className="card-wrapper">
                    {cards}
                </div>
            </div>
        )
    }
}