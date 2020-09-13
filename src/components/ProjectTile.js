import React from 'react'
import useWindowWidth from '../utils/windowDimensions'

// --------------------------------------------------------------------------------------
// Project tile - overview, name and skills
// --------------------------------------------------------------------------------------
const ProjectTile = ({overview, title, skills, link, color, openedProjects, setOpenedProjects, index}) => {

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
            className={`tile is-child notification is-${color} is-light px-2 py-2`}
            style={isOpen ? {visibility: 'visible'} : {visibility: 'hidden'}}
        >
    
            <p className="subtitle is-italic is-strong">{title}</p>

            <figure className="image is-256x256">
                {title === "Java App" ? 
                    <a href={process.env.PUBLIC_URL + link} download >
                        <img 
                            src={overview} 
                            alt={title} 
                            style={overviewStyle}
                        />
                        Download me
                    </a> : title === "Some project" ?
                    <img 
                        src={overview} 
                        alt={title} 
                        style={overviewStyle}
                    />
                    :
                    <a href={link} target="_blank" rel="noopener noreferrer"  >
                        <img 
                            src={overview} 
                            alt={title} 
                            style={overviewStyle}
                        />
                        Visit me
                    </a>

                }
            </figure>

            <ul className="content my-1 px-2">
                {
                    skills.map(skill => <li key={skill}> -- {skill}</li>)
                }
            </ul>
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

// Style for projects overview
const overviewStyle = { 
    cursor: 'pointer', 
    borderWidth: '2px', 
    borderColor: 'black', 
    borderStyle: 'solid' 
}

export default ProjectTile