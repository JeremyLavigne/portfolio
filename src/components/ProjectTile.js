import React from 'react'
import useWindowWidth from '../utils/windowDimensions'

import FrontEndProject from './projects/FrontEndProject'
import BackEndProject from './projects/BackEndProject'
import FullStackProject from './projects/FullStackProject'
import PreviousPortfolios from './projects/PreviousPortfolios'


// --------------------------------------------------------------------------------------
// Project tile - overview, name and skills
// --------------------------------------------------------------------------------------
const ProjectTile = ({title, openedProjects, setOpenedProjects, index}) => {

    const isMobile = useWindowWidth();

    // Project are always opened on mobile - UI easier like that
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
            className={`tile is-child notification is-link`}
            style={isOpen ? {visibility: 'visible'} : {visibility: 'hidden'}}
        >

            <p className="subtitle is-italic is-strong has-text-centered">{title}</p>

            {
                title === "Front-end" ? <FrontEndProject /> :
                title === "Back-end" ? <BackEndProject /> :
                title === "Portfolios" ? <PreviousPortfolios /> :
                <FullStackProject /> 
            }
    
            { !isMobile &&
            <button 
                className="delete" 
                aria-label="close"
                onClick={() => handleClickCloseProject(index)}
            ></button>
            }
        </article>
    )
}

export default ProjectTile