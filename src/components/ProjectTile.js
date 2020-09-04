import React from 'react'


// --------------------------------------------------------------------------------------
// Project tile - overview, name and skills
// --------------------------------------------------------------------------------------
const ProjectTile = ({title, skills, color}) => {

    let overview = require('../images/hangman_overview.png')

    return (
        <article className={`tile is-child notification is-${color} px-3 py-3`}>
            <figure className="image">
                <p className="image is-256x256" style={overviewStyle}>
                    <img src={overview} alt={title} />
                </p>
            </figure>

            <div className="content has-background-info-light my-3 px-2 py-2">
                <p className="content is-italic is-strong">{title}</p>
                <ul>
                    {
                        skills.map(skill => <li key={skill}>{skill}</li>)
                    }
                </ul>
            </div>
        </article>
    )
}

// Style for projects overview
const overviewStyle = { cursor: 'pointer' }

export default ProjectTile