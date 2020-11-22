import React from 'react'


// --------------------------------------------------------------------------------------
// Project 
// --------------------------------------------------------------------------------------
const Project = ({project, setProjectIsOpen, setCurrentProject}) => {

    return (
        <div 
            className="column is-full-mobile is-half-tablet is-one-third-desktop"
        >
            <figure style={{maxWidth: '80%', marginLeft: '10%', 
                position: 'relative', boxShadow: '-3px -3px grey'}}>
                <img 
                    src={project.image} alt="project overview"
                />
                <div 
                    style={{position: 'absolute', bottom: 10, right: 5, cursor: 'pointer'}}
                    onClick={() => {setProjectIsOpen(true); setCurrentProject(project)}}
                    className="has-tooltip-bottom has-tooltip-light" data-tooltip="See more"
                >
                    <i class="fas fa-plus-circle fa-2x"></i>
                </div>
            </figure>
        </div>
    )
}



export default Project