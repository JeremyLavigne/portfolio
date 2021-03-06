import React, {useState} from 'react'

import Project from './Project'
import hangmanImage from '../../images/hangman_overview.png'
import tinyGamesImage from '../../images/tiny-games.png'
import trackingAppImage from '../../images/trackingApp_overview.png'
import cakeryImage from '../../images/cakery_overview.png';
import previousImage from '../../images/version-2.png';
import communityImage from '../../images/community_overview.png'

import ProjectModal from './ProjectModal'

// --------------------------------------------------------------------------------------
// Portfolio slide 
// --------------------------------------------------------------------------------------
const Portfolio = () => {

    const [projectIsOpen, setProjectIsOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState({})

    const projects = [
        {
            title: 'Tracking app',
            date: 'November 2020',
            details: 'Tracking app simulation',
            languages: 'English, Swedish, French, Spanish',
            tech: 'React (Atomic design), Snowpack, CSS only',
            image: trackingAppImage,
            link: 'https://tracking-app-sda8.web.app',
            gitLink: 'https://github.com/JeremyLavigne/trackingApp'
        },
        {
            title: 'Tiny games',
            date: 'September 2020',
            details: 'Tic Tac Toe, Simon game, etc..',
            languages: 'English',
            tech: 'React, Redux, Webpack',
            image: tinyGamesImage,
            link: "https://mysterious-lake-01745.herokuapp.com",
            gitLink: "https://github.com/JeremyLavigne/play-with-your-child"
        },
        {
            title: 'Munamii-Cakery',
            date: 'October 2020',
            details: 'Mock of a cakery webpage',
            languages: 'English',
            tech: 'HTML, CSS, JS',
            image: cakeryImage,
            link: 'https://munamii-cakery.web.app/index.html',
            gitLink: 'https://github.com/JeremyLavigne/cupcake-website'
        },
        {
            title: 'Hangman',
            date: 'August 2020',
            details: 'Hangman game',
            languages: 'English, Swedish, French',
            tech: 'React, Redux',
            image: hangmanImage,
            link: "https://arcane-escarpment-51046.herokuapp.com",
            gitLink: "https://github.com/JeremyLavigne/hangman"
        },
        {
            title: 'Previous Portfolio',
            date: 'April 2020',
            details: 'Previous version of my portfolio',
            languages: 'English, Swedish, French',
            tech: 'HTML, CSS, JS',
            image: previousImage,
            link: 'https://www.jeremylavigneapply.com',
            gitLink: 'https://github.com/JeremyLavigne/application2.0'
        },
        {
            title: 'Community',
            date: 'November 2020',
            details: 'Fullstack group project',
            languages: 'English',
            tech: 'React, Spring',
            image: communityImage,
            link: 'https://community-sda.web.app/',
            gitLink: 'https://git.2020.school/jeremy_lavigne/web-project-team9'
        }
    ]


    return (
        <div 
            className="box columns is-multiline boxStyle"
            style={{backgroundImage: "url(" + require('../../images/bibliotek.jpg') + ")"}}
        >
            {
                projects.map((project) => 
                    <Project 
                        project={project} 
                        setProjectIsOpen={setProjectIsOpen} 
                        setCurrentProject={setCurrentProject}
                    />)
            }
            <ProjectModal 
                projectIsOpen={projectIsOpen} 
                setProjectIsOpen={setProjectIsOpen} 
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
            />
        </div>
    )
}


export default Portfolio