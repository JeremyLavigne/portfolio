import React, { useState } from 'react'

import ProjectTile from './ProjectTile'
import NavTile from './NavTile'


// --------------------------------------------------------------------------------------
// Portfolio slide - Need to work on it
// --------------------------------------------------------------------------------------
const Portfolio = () => {

    // Projects overviews images
    const hangmanImage = require('../images/hangman_overview.png')
    const javaAppImage = require('../images/java-app.png')
    const otherProjectImage = require('../images/other.png')
    const v1Image = require('../images/version-1.png')
    const v2Image = require('../images/version-2.png')
    const v3Image = require('../images/version-3.png')

    // Projects are closed by default, give user some space (except in mobile)
    const [ openedProjects, setOpenedProjects ] = useState([
        {name: "hangman", open: false},
        {name: "javaApp", open: false},
        {name: "versions", open: false},
        {name: "other", open: false}
    ])

    return (
        <div className="box" style={boxStyle}>
            <div className="tile is-ancestor px-5 py-5">

                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Hangman, The game" 
                                overview={hangmanImage}
                                skills={["React / Redux", "Basic JSON Server"]} 
                                link="https://arcane-escarpment-51046.herokuapp.com"
                                color="link" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={0}
                            />

                        </div>

                        <div className="tile is-parent">

                            <ProjectTile 
                                title="Java App" 
                                overview={javaAppImage}
                                skills={["Java", "OOP"]} 
                                link=""
                                color="success" 
                                openedProjects={openedProjects}
                                setOpenedProjects={setOpenedProjects}
                                index={1}
                            />

                        </div>
                    </div>
                   
                    <div className="tile is-parent">

                        <ProjectTile 
                            title="Version 1" 
                            overview={v1Image}
                            skills={["March 2020", "Carefree..."]} 
                            link="https://www.jeremylavigneapply.com/version-1/indexv1.html"
                            color="warning" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={2}
                        />

                        <ProjectTile 
                            title="Version 2" 
                            overview={v2Image}
                            skills={["May 2020", "Full of Hope!"]} 
                            link="https://www.jeremylavigneapply.com"
                            color="warning" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={2}
                        />

                        <ProjectTile 
                            title="Version 3"
                            overview={v3Image} 
                            skills={["October 2020", "Confident :)"]} 
                            link="/"
                            color="warning" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={2}
                        />

                    </div>
                </div>

                <div className="tile is-vertical is-4">

                    <div className="tile is-parent" style={{maxHeight: '200px'}}>

                        <NavTile openedProjects={openedProjects} setOpenedProjects={setOpenedProjects}/>

                    </div>

                    <div className="tile is-parent">

                        <ProjectTile 
                            title="Some project" 
                            overview={otherProjectImage}
                            skills={["Some skill", "Some other skill"]} 
                            link=""
                            color="danger" 
                            openedProjects={openedProjects}
                            setOpenedProjects={setOpenedProjects}
                            index={3}
                        />

                    </div>

                </div>

            </div>
        </div>
    )
}

// Content is not supposed to get out of the slide
// Body height : 90vh - slide height : 85vh
const boxStyle = {
    minHeight: '85vh',
    marginTop: '2.5vh',
    maxHeight: '85vh',
    overflow: 'auto',
    backgroundImage: "url(" + require('../images/bibliotek.jpg') + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px'
}


export default Portfolio