import React from 'react'
import useWindowWidth from '../utils/windowDimensions'

// --------------------------------------------------------------------------------------
// Project tile - overview, name and skills
// --------------------------------------------------------------------------------------
const ProjectTile = ({title, skills, color, openedProjects, setOpenedProjects, index}) => {

    let overview = require('../images/hangman_overview.png')

    const isMobile = useWindowWidth();

    // Project are alwaya opened on mobile - UI easier like that
    let isOpen
    if (isMobile) { isOpen = true} else {
    isOpen = openedProjects[index].open }

    const handleClickCloseProject = (index) => {
        const newOpenedProjects = [...openedProjects]

        newOpenedProjects[index].open = false

        setOpenedProjects(newOpenedProjects)
    }

    return (
        <article 
            className={`tile is-child notification is-${color} px-2 py-2`}
            style={isOpen ? {visibility: 'visible'} : {visibility: 'hidden'}}
        >
    
            <p className="subtitle is-italic is-strong">{title}</p>

            <figure className="image is-256x256">
                    <img src={overview} alt={title} style={overviewStyle} />
            </figure>

            <ul className="content my-1 px-2">
                {
                    skills.map(skill => <li key={skill}> -- {skill}</li>)
                }
            </ul>

            <button 
                className="delete" 
                aria-label="close"
                onClick={() => handleClickCloseProject(index)}
            ></button>
        </article>
    )
}

// Style for projects overview
const overviewStyle = { 
    cursor: 'pointer', 
    borderWidth: '2px', 
    borderColor: 'black', 
    borderStyle: 'solid' 
}

export default ProjectTile