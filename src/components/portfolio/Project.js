import React from 'react'
import './Project.css';


// --------------------------------------------------------------------------------------
// Project 
// --------------------------------------------------------------------------------------
const Project = ({project, setProjectIsOpen, setCurrentProject}) => {

    return (
        <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
            <figure className="projectFigure">
                <img 
                    src={project.image} alt="project overview"
                />
                <div 

                    onClick={() => {setProjectIsOpen(true); setCurrentProject(project)}}
                    className="has-tooltip-bottom has-tooltip-light plusButton" data-tooltip="See more"
                >
                    <i class="fas fa-plus-circle fa-2x"></i>
                </div>
            </figure>
        </div>
    )
}



export default Project